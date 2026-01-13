const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  images: [String],
  bestTimeToVisit: String,
  itineraries: [{
    days: Number,
    activities: [String]
  }],
  food: [{ name: String, description: String, image: String }],
  accommodations: [{ type: String, description: String }],
  activities: [{ name: String, description: String }],
  nearbyAttractions: [{ name: String, description: String, distance: String }],
  howToReach: {
    byAir: String,
    byTrain: String,
    byRoad: String
  },
  rating: { type: Number, default: 0 },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Destination', destinationSchema);
