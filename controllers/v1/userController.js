const { User } = require('../../DB/index');

exports.createUser = async (firstname, email, hasPet, pet) => {
  try {
    const userModel = new User({
      firstname,
      email,
      hasPet,
      pet,
    });
    const result = await userModel.save();
    console.log(result);
  } catch (err) {
    console.error('Error message: ', err);
  }
};

exports.getAllUser = async () => {
  try {
    const users = await User
      .find();
    console.log(users);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getUserByName = async (name) => {
  try {
    const user = await User
      .find({ firstname: name });
    console.log(user);
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateUserOne = async (id, firstname, email, hasPet, pet) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return;
    }
    user.firstname = firstname;
    user.email = email;
    user.hasPet = hasPet;
    user.pet = pet;

    const result = await user.save();
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateUserTwo = async (id, firstname, email, hasPet, pet) => {
  try {
    const user = await User.update({ _id: id }, {
      $set: {
        firstname,
        email,
        hasPet,
        pet,
      },
    });
    console.log(user);
  } catch (err) {
    console.error(err.message);
  }
};

exports.deleteUser = async (id) => {
  try {
    const result = await User.deleteOne({ _id: id });
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
};
