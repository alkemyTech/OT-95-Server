/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [{
      name: 'María Irola',
      facebookUrl: 'https://facebook.com/',
      instagramUrl: 'https://instagram.com/',
      linkedinUrl: 'https://linkedin.com/',
      image: 'https://alkemy-ong-md.s3.amazonaws.com/4c6a38d8-31b9-4def-928e-08b7e2355b5d.jpg',
      description: 'María estudió economía y se especializó en economía para el desarrollo. Comenzó como voluntaria en la fundación y fue quien promovió el crecimiento y la organización de la institución acompañando la transformación de un simple comedor barrial al centro comunitario de atención integral que es hoy en día',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Marita Gomez',
      facebookUrl: 'https://facebook.com/',
      instagramUrl: 'https://instagram.com/',
      linkedinUrl: 'https://linkedin.com/',
      image: 'https://alkemy-ong-md.s3.amazonaws.com/4c6a38d8-31b9-4def-928e-08b7e2355b5d.jpg',
      description: 'Marita estudió la carrera de nutrición y se especializó en nutrición infantil. Toda la vida fue voluntaria en distintos espacios en el barrio hasta que decidió abrirse un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {});
  }
};
