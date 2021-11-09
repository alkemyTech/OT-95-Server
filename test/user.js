let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'http://localhost:3000/api';



describe('Get all users: ', () => {
  it('Should get all users', (done) => {
    chai.request(url)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Testing the get one users: ', () => {
  it('Should get the user with id 2', (done) => {
    chai.request(url)
      .get('/users/2')
      .end((err, res) => {
        expect(res.body.data).to.have.property('id').to.be.equal(2);
        expect(res).to.have.status(200);
        done();
      });
  });
  it('Verify that the user 9999 doesnt exists', (done) => {
    chai.request(url)
      .get('/users/9999')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

});

describe('Insert a user: ', () => {
  it('should insert a user', (done) => {
    chai.request(url)
      .post('/users')
      .send({
        firstName: 'Example',
        lastName: 'Example',
        password: '123456',
        email: 'example@example.com'
      })
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Insert a user without an obligatory param: ', () => {
  it('should receive an error', (done) => {
    chai.request(url)
      .post('/users')
      .send({
        lastName: 'Example',
        password: '123456',
        email: 'example@example.com'
      })
      .end((err, res) => {
        expect(res).to.have.status(500);
        done();
      });
  });
});

