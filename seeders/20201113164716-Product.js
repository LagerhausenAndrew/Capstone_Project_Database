'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name:'One',
        price: 50,
        description: 'Trial 1',
        img: 'https://imgur.com/gallery/fm7cWKP'
      },
      {
        name:'Two',
        price: 75,
        description: 'Trial 2',
        img: 'https://imgur.com/gallery/fm7cWKP'
      },
      {
        name:'Three',
        price: 100,
        description: 'Trial 3',
        img: 'https://imgur.com/gallery/fm7cWKP'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
