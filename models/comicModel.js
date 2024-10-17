const db = require('../config/db');

const Comic = {
  // Create new comic
  create: (comic, callback) => {
    const sql = `INSERT INTO comics (name, author, year_of_publication, price, discount, pages, book_condition, description) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [comic.name, comic.author, comic.year_of_publication, comic.price, comic.discount, comic.pages, comic.book_condition, comic.description], callback);
  },

  // Get all comics with pagination, filtering, and sorting
  findAll: (filters, callback) => {
    let sql = `SELECT * FROM comics WHERE 1=1`;

    // Apply filters dynamically
    if (filters.author) sql += ` AND author LIKE '%${filters.author}%'`;
    if (filters.year) sql += ` AND year_of_publication = ${filters.year}`;
    if (filters.priceMin) sql += ` AND price >= ${filters.priceMin}`;
    if (filters.priceMax) sql += ` AND price <= ${filters.priceMax}`;
    if (filters.condition) sql += ` AND book_condition = '${filters.condition}'`;

    // Apply sorting
    if (filters.sortBy) sql += ` ORDER BY ${filters.sortBy}`;
    if (filters.limit && filters.offset) sql += ` LIMIT ${filters.limit} OFFSET ${filters.offset}`;

    db.query(sql, callback);
  },

  // Get one comic by ID
  findById: (id, callback) => {
    const sql = `SELECT * FROM comics WHERE id = ?`;
    db.query(sql, [id], callback);
  },

  // Update comic by ID
  update: (id, comic, callback) => {
    const sql = `UPDATE comics SET name = ?, author = ?, year_of_publication = ?, price = ?, discount = ?, pages = ?, book_condition = ?, description = ? WHERE id = ?`;
    db.query(sql, [comic.name, comic.author, comic.year_of_publication, comic.price, comic.discount, comic.pages, comic.book_condition, comic.description, id], callback);
  },

  // Delete comic by ID
  delete: (id, callback) => {
    const sql = `DELETE FROM comics WHERE id = ?`;
    db.query(sql, [id], callback);
  }
};

module.exports = Comic;
