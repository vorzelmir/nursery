const jwt = require('jsonwebtoken');
const { User } = require('../../DB/index');

// args not less 32 chars string and 90 days time
const createToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TIME });

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      firstname: req.body.firstname,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });

    if (!newUser) {
      return next(new Error('Can not create new user'));
    }
    // create and add jwt token to user
    const token = createToken(newUser._id);
    res.status(201).json({
      status: 'success',
      token,
      data: { user: newUser },
    });
  } catch (err) {
    res.status(400).json({
      success: 'fail signup',
      message: err,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const {
      email,
      password,
    } = req.body;
    // if email and password exist
    if (!email || !password) {
      return next(new Error('The email or password do not exist'));
    }
    // check user exist and password is correct
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return next(new Error('User does not exist'));
    }
    if (!user || !user.correctPassword(password, user.password)) {
      return next(new Error('The password or email is incorrect'));
    }
    const token = await createToken(user._id);
    res.status(200).json({
      status: 'success',
      token,
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      success: 'fail login',
      message: err.message,
    });
  }
};
