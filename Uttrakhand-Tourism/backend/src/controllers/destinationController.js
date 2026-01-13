const Destination = require('../models/Destination');

exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDestinationBySlug = async (req, res) => {
  try {
    const destination = await Destination.findOne({ slug: req.params.slug });
    if (!destination) return res.status(404).json({ message: 'Destination not found' });
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchDestinations = async (req, res) => {
  try {
    const { q } = req.query;
    const destinations = await Destination.find({
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ]
    });
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFeaturedDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({ featured: true }).limit(6);
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
