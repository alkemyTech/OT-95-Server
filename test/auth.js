require('dotenv').config();
const chai = require('chai');

const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = process.env.URL;

let token;
let data;

describe('POST ', () => {
    it('It should login User', (done) => {
      chai.request(url)
        .post('/auth/login')
        .send({ email: 'admin@admin.com', password: '123456' })
        .end((error, res) => {
          data = res.body.user;
          token = res.body.token;
          expect(res).to.have.status(200);
          expect(data).to.be.a.string;
          expect(data).to.be.a.string;
          expect(token).to.be.a.string;
          expect(token).to.not.be.null;
          done();
        });
    });

    it('Should receive an error because the password is missing', (done) => {
      chai.request(url)
      .post('/auth/login')
      .send({ email: 'admin@admin.com' })
      .end((error, res) => {
        expect(res).to.have.status(400);
        done();
      });
    });
});

describe('POST ', () => {
  it('Should insert a user', (done) => {
    chai.request(url)
      .post('/auth/register')
      .send({
        firstName: 'Example',
        lastName: 'Example',
        email: 'example@gmail.com',
        password: '123456',
      })
      .end((error, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });

  it('Should receive an error because the password is missing', (done) => {
    chai.request(url)
      .post('/auth/register')
      .send({
        firstName: 'Example',
        lastName: 'Example',
        email: 'example2@gmail.com',
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});


// describe('GET')