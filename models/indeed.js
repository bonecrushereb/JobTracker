const mongoose = require('mongoose');

var indeedSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  JobTitle: { type: String, required: true },
  Description: { type: String, required: true },
  Note: { type: String }
});

module.exports = exports = mongoose.model('indeed', indeedSchema);
