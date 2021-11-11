const chai = require('chai');

const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'http://localhost:3000/api';


describe('Get all users: ', () => {
  it('Should get all users', (done) => {
    chai.request(url)
      .get('/users')
      .end((err, res) => {
        const users = res.body.data;
        users.forEach((user) => {
          expect(user.fisrtName).to.be.a.string;
          expect(user.lastName).to.be.a.string;
          expect(user.email).to.be.a.string;
        });
        expect(res).to.have.status(200);
        expect(users).to.be.an('array');
        done();
      });
  });
});

describe('Testing the get one users: ', () => {
  it('Should get the user with id 59', (done) => {
    chai.request(url)
      .get('/users/59')
      .end((err, res) => {
        expect(res.body.data).to.have.property('id').to.be.equal(59);
        expect(res).to.have.status(200);
        done();
      });
  });
  it('Verify that the user 9999 doesnt exist', (done) => {
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
      .post('/auth/register')
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
  it('should delete a user', (done) => {
    chai.request(url)
      .del('/users')
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Insert a user without an obligatory param: ', () => {
  it('should receive an error', (done) => {
    chai.request(url)
      .post('/auth/register')
      .send({
        lastName: 'Example',
        password: '123456',
        email: 'example@example.com'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});

