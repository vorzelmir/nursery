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

exports.getNursery = async () => {
  try {
    const nursery = await Nursery
      .find()
      .populate('nursery');
    console.log(nursery);
  } catch (e) {
    console.error(e.message);
  }
};

exports.updateNursery = async (id, newNursery) => {
  try {
    if (!await Nursery.findById(id)) {
      console.error(`Nursery with ${id} does not exist`);
      return;
    }
    const nursery = new Nursery(newNursery);
    const result = await Nursery.updateOne({ _id: id }, { $set: { name: nursery.name } });
    console.log(result);
  } catch (e) {
    console.error(e.message);
  }
};

exports.deleteNursery = async (id) => {
  try {
    if (!await Nursery.findById(id)) {
      console.error(`Nursery with ${id} does not exist`);
      return;
    }
    const result = await Nursery.deleteOne({ _id: id });
    console.log(`Deleted: ${result}`);
  } catch (e) {
    console.error(e.message);
  }
};
