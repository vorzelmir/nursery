const { Nursery } = require('../../DB/index');

exports.createNursery = async (req, res) => {
  try {
    const result = await Nursery.create(req.body);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: 'fail',
      message: err,
    });
  }
};

exports.getNurseries = async (req, res) => {
  try {
    const nurseries = await Nursery.find();
    res.status(200).json({
      success: true,
      data: nurseries,
    });
  } catch (err) {
    res.status(400).json({
      success: 'fail',
      message: err,
    });
  }
};

exports.getNursery = async (req, res) => {
  try {
    const nursery = await Nursery.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: nursery,
    });
  } catch (err) {
    res.status(400).json({
      success: 'fail',
      message: err,
    });
  }
};

exports.updateNursery = async (req, res) => {
  try {
    const nursery = await Nursery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
      success: true,
      data: nursery,
    });
  } catch (err) {
    res.status(400).json({
      success: 'fail',
      message: err,
    });
  }
};

exports.deleteNursery = async (req, res) => {
  try {
    await Nursery.findByIdAndDelete(req.params.id);
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
