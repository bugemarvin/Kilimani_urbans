const express = require('express');
const passport = require('passport');
const cors = require('cors');
const { connectDB } = require('./config/db');
const { config } = require('dotenv');
const { configureRedis } = require('./config/redis');
const { passport: configurePassport } = require('./config/passport');
const LoggingMiddleware = require('./middleware/loggingMiddleware');
const { errorHandler, handle404Error, handle404ErrorMiddleware } = require('./middleware/errorMiddleware');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const urbanData = require('./routes/authRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const profileRoutes = require('./routes/profileRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const newsRoutes = require('./routes/newsRoutes');
const messageRoutes = require('./routes/messageRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
// const geoDataRoutes = require('./routes/geoDataRoutes');
// const disscussionRoutes = require('./routes/discussionRoutes');
// const analyticsDataRoutes = require('./routes/analyticsDataRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

// Load environment variables from .env file
config();

const app = express();

const PORT = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';

// Enable CORS
const corsOptions = {
  origin: process.env.HOST
    ? `http://${host}:${PORT}` || `https://${host}:${PORT}`
    : '*',
  credentials: true
};

app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Configure Redis for session storage
configureRedis(app);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport
configurePassport(passport);

// Initialize logging middleware
const loggingMiddleware = new LoggingMiddleware();
app.use(loggingMiddleware.logRequests());

// Initialize error middleware
app.use(errorHandler);

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

/**
 * import Route
 * api_v1:
 */
// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Define your valid routes
const validRoutes = [
  '/api_v1/analyticsData',
  '/api_v1/discussion',
  '/api_v1/geoData',
  '/api_v1/weather',
  '/api_v1/messages',
  '/api_v1/info',
  '/api_v1/notifications',
  '/api_v1/profile',
  '/api_v1/settings',
  '/api_v1/urban',
  '/api_v1/account',
  '/api_v1/admin'
];

// Middleware to check if the route is valid
app.use('/api_v1/:route', (req, res, next) => {
  const route = `/api_v1/${req.params.route}`;
  if (validRoutes.includes(route)) {
    next();
  } else {
    res.status(404).json({ error: 'Invalid route' });
  }
});

// Welcome route
app.use('/api_v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to kilimani Urbans Data' });
});
// Admin routes
app.use('/api_v1/admin', adminRoutes);

// Account routes
app.use('/api_v1/account', authRoutes);

// urban data routes
app.use('/api_v1/urban', urbanData);

// Settings routes
app.use('/api_v1/settings', settingsRoutes);

// Profile routes
app.use('/api_v1/profile', profileRoutes);

// Notifications route
app.use('/api_v1/notifications', notificationRoutes);

// News routes
app.use('/api_v1/info', newsRoutes);

// Message routes
app.use('/api_v1/messages', messageRoutes);

// Weather routes
app.use('/api_v1/weather', weatherRoutes);

// Geo data routes
// app.use('/api_v1/geoData', geoDataRoutes);

// Discussion routes
// app.use('/api_v1/discussion', disscussionRoutes);

// Analytics data routes
// app.use('/api_v1/analyticsData', analyticsDataRoutes);

// Handle 404 errors
app.use(handle404ErrorMiddleware);
app.use(handle404Error);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
