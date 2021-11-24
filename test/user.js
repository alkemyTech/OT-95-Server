const chai = require('chai');

const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'http://localhost:3000/api';
let token;

describe('Authorization and get users ', () => {
  it('Should get a token', (done) => {
    chai.request(url)
      .post('/auth/login')
      .send({ email: 'admin@admin.com', password: '123456' })
      .end((error, res) => {
        token = res.body.token;
        expect(token).to.be.a.string;
        expect(token).to.not.be.null;
        done();
      });
  });

  it('Should get all users', (done) => {
    chai.request(url)
      .get('/users')
      .set({ 'Authorization': `Bearer ${token}` })
      .end((err, res) => {
        const users = res.body.data;
        users.forEach((user) => {
          expect(user.firstName).to.be.a.string;
          expect(user.lastName).to.be.a.string;
          expect(user.email).to.be.a.string;
        });
        expect(res).to.have.status(200);
        expect(users).to.be.an('array');
        done();
      });
  });
  it('Should get the user with id 2', (done) => {
    chai.request(url)
      .get('/users/2')
      .set({ 'Authorization': `Bearer ${token}` })
      .end((err, res) => {
        expect(res.body.data).to.have.property('id').to.be.equal(2);
        expect(res).to.have.status(200);
        done();
      });
  });
  it('Verify that the user 99999 doesnt exist', (done) => {
    chai.request(url)
      .get('/users/99999')
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});


describe('POST ', () => {
  it('Should insert a user', (done) => {
    emailNumber = Math.floor(Math.random() * 10000);
    chai.request(url)
      .post('/auth/register')
      .send({
        firstName: 'Example',
        lastName: 'Example',
        password: '123456',
        email: `example${emailNumber}@gmail.com`
      })
      .end((error, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it('Should receive an error because the firstName is missing', (done) => {
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
  it('Should receive an error because the email is wrong', (done) => {
    chai.request(url)
      .post('/auth/register')
      .send({
        firstName: 'Example',
        lastName: 'Example',
        password: '123456',
        email: 'example'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});

