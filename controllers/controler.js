const mongoose = require('mongoose');
const UserModel = require('../models/userModel');
const PetModel = require('../models/petModel');
const NurseryModel = require('../models/nurserySchema');

exports.createUser = async () => {
  const user = new UserModel({
    name: 'Bill Clinton',
  });
  const result = await user.save();
  console.log(result);
};
