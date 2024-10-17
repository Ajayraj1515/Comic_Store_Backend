const Comic = require('../models/comicModel');

// Create new comic
exports.createComic = (req, res) => {
  const comicData = req.body;
  Comic.create(comicData, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Comic created successfully', comicId: result.insertId });
  });
};

// Get all comics
exports.getComics = (req, res) => {
  const filters = {
    author: req.query.author || '',
    year: req.query.year || '',
    priceMin: req.query.priceMin || '',
    priceMax: req.query.priceMax || '',
    condition: req.query.condition || '',
    sortBy: req.query.sortBy || 'id',
    limit: req.query.limit || 10,
    offset: req.query.offset || 0
  };

  Comic.findAll(filters, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};

// Get comic by ID
exports.getComicById = (req, res) => {
  const comicId = req.params.id;
  Comic.findById(comicId, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result.length) return res.status(404).json({ message: 'Comic not found' });
    res.status(200).json(result[0]);
  });
};

// Update comic
exports.updateComic = (req, res) => {
  const comicId = req.params.id;
  const comicData = req.body;
  Comic.update(comicId, comicData, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Comic updated successfully' });
  });
};

// Delete comic
exports.deleteComic = (req, res) => {
  const comicId = req.params.id;
  Comic.delete(comicId, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Comic deleted successfully' });
  });
};
