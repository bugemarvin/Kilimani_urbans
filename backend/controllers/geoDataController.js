const GeoLocation = require('../models/geoLocation');

// Create a new geolocation record
exports.createGeoLocation = async (req, res) => {
  try {
    const { userId, coordinates } = req.body;
    const geoLocation = new GeoLocation({
      userId,
      geoLocation: { type: 'Point', coordinates }
    });
    const savedGeoLocation = await geoLocation.save();
    res.status(201).json(savedGeoLocation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Retrieve all geolocations
exports.getAllGeoLocations = async (req, res) => {
  try {
    const geoData = await GeoLocation.find();
    res.status(200).json(geoData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Retrieve a specific geolocation by ID
exports.getGeoLocationById = async (req, res) => {
  try {
    const geoLocation = await GeoLocation.findById(req.params.id);
    if (!geoLocation) {
      return res.status(404).json({ error: 'GeoLocation not found' });
    }
    res.status(200).json(geoLocation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a geolocation record by ID
exports.updateGeoLocation = async (req, res) => {
  try {
    const { userId, coordinates } = req.body;
    const updatedGeoLocation = await GeoLocation.findByIdAndUpdate(
      req.params.id,
      {
        userId,
        geoLocation: { type: 'Point', coordinates },
      },
      { new: true }
    );
    if (!updatedGeoLocation) {
      return res.status(404).json({ error: 'GeoLocation not found' });
    }
    res.status(200).json(updatedGeoLocation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a geolocation record by ID
exports.deleteGeoLocation = async (req, res) => {
  try {
    const deletedGeoLocation = await GeoLocation.findByIdAndRemove(req.params.id);
    if (!deletedGeoLocation) {
      return res.status(404).json({ error: 'GeoLocation not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
