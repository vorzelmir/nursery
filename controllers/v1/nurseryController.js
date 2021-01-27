const { Nursery } = require('../../DB/index');

exports.createNursery = async (head, user, pet) => {
  try {
    const nurseryModel = new Nursery({
      head,
      user,
      pet,
    });
    const result = await nurseryModel.save();
    console.log(result);
  } catch (e) {
    console.error('Nursery cannot created');
  }
};

exports.getNursery = async (prop) => {
  try {
    const nursery = await Nursery
      .find()
      .populate(prop)
      .select('head');
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
