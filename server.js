const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const indeedRouter = require(__dirname + '/routes/indeedrouter');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/indeed_db');

app.use('/api', indeedRouter);
app.use((req, res) => {
  res.status(404).send('Error 404 File not found');
});

module.exports = exports = app.listen(PORT, () => console.log('server up on port:' + PORT));
