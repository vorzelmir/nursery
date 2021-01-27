const { User } = require('../../DB/index');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      success: 'fail',
      message: err,
    });
  }
  return null;
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
  return null;
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
      success: true,
      data: user,
    });
    // const result = await user.save();
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      success: 'fail',
      message: err,
    });
  }
};
