const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://localhost/my-first-mongoose', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const users = [
  {
    name: 'Selim'
  },
  {
    name: 'Kamila'
  }
];

User.create(users)
  .then(() => {
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
  });
