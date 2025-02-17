const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  director_name: { type: String, required: true },
  production_house: { type: String, required: true },
  release_date: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
