const {
  User,
} = require('../models/userModel');
const {
  Pet,
} = require('../models/petModel');

exports.createUser = async (name, email, hasPet, petName, petType, petAge, owner) => {
  const petModel = new Pet({
    petName,
    petType,
    petAge,
    owner,
  });
  const userModel = new User({
    name,
    email,
    hasPet,
    petModel,
  });
  let result;
  try {
    result = await userModel.save();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
