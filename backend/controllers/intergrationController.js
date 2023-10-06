const axios = require('axios');
const { config } = require('dotenv');
const { json } = require('express');

config();

const url = process.env.WEATHER_API_URL;

exports.getWeatherData = async (req, res) => {
  try {
    const response = await axios.get(url);
    const weatherData = response.data;
    console.log(json(weatherData));
    return res.status(200).json(weatherData);
  } catch (error) {
    return res.status(500).send(error);
  }
};
