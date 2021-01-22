const { Nursery } = require('../../DB/index');

exports.createNursery = async (name, property) => {
  try {
    const nurseryModel = new Nursery({
      name,
      property,
    });
    const result = await nurseryModel.save();
    console.log('Result', result);
  } catch (e) {
    console.error('Nursery create error: ', e);
  }
};
