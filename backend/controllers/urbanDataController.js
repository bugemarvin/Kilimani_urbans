const UrbanData = require('../models/urbanData');

// Create new urban data entry
exports.createUrbanData = (req, res) => {
  const { data } = req.body;
  const newUrbanData = new UrbanData({ data });

  newUrbanData.save((err, urbanData) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(urbanData);
  });
};

// Get all urban data entries
exports.getAllUrbanData = (req, res) => {
  UrbanData.find({}, (err, urbanData) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(urbanData);
  });
};

// Get a single urban data entry by ID
exports.getUrbanDataById = (req, res) => {
  const { id } = req.params;
  UrbanData.findById(id, (err, urbanData) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!urbanData) {
      return res.status(404).json({ message: 'Urban data not found' });
    }
    return res.status(200).json(urbanData);
  });
};

// Update an existing urban data entry by ID
exports.updateUrbanData = (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  UrbanData.findByIdAndUpdate(id, { data }, { new: true }, (err, urbanData) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!urbanData) {
      return res.status(404).json({ message: 'Urban data not found' });
    }
    return res.status(200).json(urbanData);
  });
};

// Delete an urban data entry by ID
exports.deleteUrbanData = (req, res) => {
  const { id } = req.params;
  UrbanData.findByIdAndRemove(id, (err, urbanData) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!urbanData) {
      return res.status(404).json({ message: 'Urban data not found' });
    }
    return res.status(204).send();
  });
};
