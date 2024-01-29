'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Books', [
      {
        name: 'The Lord of the Rings',
        publisher: 'Harpers',
        years: '1954-1955',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Hobbit',
        publisher: 'Harpers',
        years: '1937-1939',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Catcher in the Rye',
        publisher: 'Harpers',
        years: '1951-1952',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {})
  }
};
