const faker = require('faker');
const User = require('../../models/User');
const Matiere = require('../../models/Matiere');
const Assignment = require('../../models/Assignment');
const Devoir = require('../../models/Devoir');

const seed = async (n) => {
  for (let i = 0; i < n; i++) {
    /**
     * * CREATE MATIERE
     */

    const matiere = await Matiere.create({
      name: faker.name.jobType(),
      thumbnail: faker.image.business(),
    });

    /**
     * * CREATE ADMIN USER
     */
    await User.create({
      name: faker.name.firstName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.internet.avatar(),
      role: 'ADMIN',
      groupe: '',
      matiere: matiere._id,
    });

    /**
     * * BASE USER
     */
    const user = await User.create({
      name: faker.name.firstName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.internet.avatar(),
      role: 'BASE',
      groupe: '',
      matiere: matiere._id,
    });

    /**
     * * ASSIGNEMENT
     */
    const assignment = await Assignment.create({
      title: faker.name.title(),
      des: faker.lorem.paragraph(),
      groupe: '',
      user: user._id,
    });

    /**
     * * DEVOIR
     */
    await Devoir.create({
      title: faker.name.title(),
      remarques: faker.lorem.paragraphs(),
      type: 'EN ATTENTE',
      note: 15,
      assignment: assignment._id,
      user: user._id,
    });
  }
};

module.exports = seed;
