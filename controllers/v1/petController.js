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

exports.getAllPets = async (master) => {
  try {
    const pets = await Pet.find()
      .populate(master)
      .select('user');
    console.log(pets);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getPetByName = async (name) => {
  try {
    const pet = await Pet.find()
      .populate({ petName: name })
      .select();
    console.log(pet);
  } catch (e) {
    console.error(e.message);
  }
};

exports.updatePet = async (id, newPet, owner, house) => {
  try {
    const pet = new Pet(newPet);
    if (!await Pet.findById(id)) {
      console.log('cannot find pet ');
      return;
    }
    const result = await Pet.updateOne({ _id: id }, {
      $set: {
        petName: pet.petName,
        petType: pet.petType,
        petAge: pet.petAge,
        owner,
        house,
      },
    });
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
};

exports.deletePet = async (id) => {
  try {
    if (!await Pet.findById(id)) {
      console.error(`Cannot find pet with: ${id} id`);
      return;
    }
    const result = await Pet.deleteOne({ _id: id });
    console.log(result);
  } catch (e) {
    console.error(e.message);
  }
};
