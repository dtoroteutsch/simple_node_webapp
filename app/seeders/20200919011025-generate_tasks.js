'use strict';

module.exports = {
  up: () => {
    return queryInterface.bulkInsert('tasks', [
      {
	id: 1,
	description: 'Record backend course',
	createdAt: new Date(),
	updatedAt: new Date()
      },
      {
	id: 2,
	description: 'Edit backend video course',
	createdAt: new Date(),
	updatedAt: new Date()
      },
      {
	id: 3,
	description: 'Upload backend videos',
	createdAt: new Date(),
	updatedAt: new Date()
      }
    ], {});
  },
  down: () => {
    return queryInterface.bulkDelete('tasks', null, {});
  }
};
