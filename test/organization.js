const chai = require('chai');

const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'http://localhost:3000/api';

describe('Get public data ', () => {
  it('Should receive public data', (done) => {
    chai.request(url)
      .get('/organization/public')
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.be.an('array');
        done();
      });
  });
  it('Should not receive no public data', (done) => {
    chai.request(url)
      .get('/organization/public')
      .end((error, res) => {
        const data = res.body.data[0];
        expect(data).to.not.have.own.property('welcomeText');
        done();
      });
  });
});

describe('Get data ', () => {
  it('Should receive all the data', (done) => {
    chai.request(url)
      .get('/organization')
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('Should receive data of the organization with id 1', (done) => {
    chai.request(url)
      .get('/organization/1')
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
it('Get an error because organization 99999 does not exist', (done) => {
  chai.request(url)
    .get('/organization/99999')
    .end((error, res) => {
      expect(res).to.have.status(404);
      done();
    });
});
