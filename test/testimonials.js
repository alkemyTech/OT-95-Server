// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const expect = require('chai').expect;
// const userRepository = require('../app/repositories/users-repository');
// const generateJwt = require('../app/helpers/generate-jwt');

// chai.use(chaiHttp);

// const url = 'http://localhost:3000/api';
// let token;


// describe('GET', () => {

//   beforeEach( async () => {
//     // chai.request(url)
//     // .post('/auth/login')
//     // .send({ email: 'admin@admin.com', password: '123456' })
//     // .end((error, res) => {
//     //   token = res.body.token;
//     // });

//     const user = await userRepository.getUserWithEmail('admin@admin.com');
//     token = await generateJwt.generateJwt(user);
//   });

//   it('Should get all testimonials', (done) => {
//     chai.request(url)
//       .get('/testimonials')
//       .set({ 'Autorization': `Bearer ${token}` })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         done();
//       });
//   });
// });
