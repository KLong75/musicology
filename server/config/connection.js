const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/musician-networking-app', {
  
});

module.exports = mongoose.connection;
