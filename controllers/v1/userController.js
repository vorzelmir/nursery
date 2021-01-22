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
exports.listUsers = async () => {
  const users = await User
    .find()
    .populate('pet')
    .select('name');
  console.log(users);
};
