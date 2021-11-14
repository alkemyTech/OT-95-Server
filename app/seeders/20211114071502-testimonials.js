module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Testimonials', [{
      name: 'example testimonial 1',
      image: 'image1.png',
      content: 'example content 1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'example testimonial 2',
      image: 'image2.png',
      content: 'example content 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'example testimonial 3',
      image: 'image3.png',
      content: 'example content 3',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Testimonials', null, {});
  }
};
