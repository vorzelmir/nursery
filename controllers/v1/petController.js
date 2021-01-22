const { Pet } = require('../../DB/index');

exports.createPet = async (petName, petType, petAge, owner, house) => {
  try {
    const petModel = new Pet({
      petName,
      petType,
      petAge,
      owner,
      house,
    });
    const result = await petModel.save();
    console.log(result);
  } catch (err) {
    console.error('Pet create error message', err);
  }
};
