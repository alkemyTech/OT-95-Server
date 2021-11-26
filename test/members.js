/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const chai = require('chai');
const path = require('path');

const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'http://localhost:3000/api';

let token;
let id = 1;

describe('POST Member', () => {
  it('Should generate a token', (done) => {
    chai.request(url)
      .post('/auth/login')
      .send({ email: 'admin@admin.com', password: '123456' })
      .end((error, res) => {
        token = res.body.token.trim();
        expect(token).to.not.be.null;
        expect(token).to.be.a.string;
        done();
      });
  });

  it('Should create a member', (done) => {
    chai.request(url)
      .post('/members')
      .set({ Authorization: `Bearer ${token}` })
      .field('name', 'memberTest')
      .attach('image', path.join(__dirname, '/img/test.jpg'))
      .end((error, res) => {
        id = res.body.data.id;
        expect(id).to.not.be.null;
        expect(id).to.be.an('number');
        expect(res).to.have.status(201);
        done();
      });
  });

  it('Should return an error because the name is missing', (done) => {
    chai.request(url)
      .post('/members')
      .set({ Authorization: `Bearer ${token}` })
      .attach('image', path.join(__dirname, '/img/test.jpg'))
      .end((error, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });

  it('Should return an error because the image is missing', (done) => {
    chai.request(url)
      .post('/members')
      .set({ Authorization: `Bearer ${token}` })
      .field('name', 'member1')
      .end((error, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });

  it('Should return a error because the token is not sent', (done) => {
    chai.request(url)
      .post('/members')
      .field('name', 'member1')
      .attach('image', path.join(__dirname, '/img/test.jpg'))
      .end((error, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});

describe('GET Members', () => {
  it('Should get all members in an array', (done) => {
    chai.request(url)
      .get('/members')
      .set({ Authorization: `Bearer ${token}` })
      .end((error, res) => {
        const members = res.body.data;
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('info');
        expect(members).to.be.an('array');
        done();
      });
  });

  it('Should get a member by Id', (done) => {
    chai.request(url)
      .get(`/members/${id}`)
      .set({ Authorization: `Bearer ${token}` })
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.have.property('id').to.be.equal(id);
        done();
      });
  });

  it('Should return a not found message', (done) => {
    chai.request(url)
      .get('/members/-1')
      .set({ Authorization: `Bearer ${token}` })
      .end((error, res) => {
        expect(res).to.have.status(404);
        expect(res.body.message).to.be.equal('Not Found');
        done();
      });
  });
});

describe('PUT Members', () => {
  it('Should update a member', (done) => {
    chai.request(url)
      .put(`/members/${id}`)
      .set({ Authorization: `Bearer ${token}` })
      .field('name', 'UpdatedName')
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.id).to.be.equal(id);
        expect(res.body.data.name).to.be.equal('UpdatedName');
        done();
      });
  });
});

describe('DELETE Member', () => {
  it('Should delete a member', (done) => {
    chai.request(url)
      .delete(`/members/${id}`)
      .set({ Authorization: `Bearer ${token}` })
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.be.equal('Deleted successfully');
        done();
      });
  });
});
