require('dotenv').config();
const chai = require('chai');

const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = process.env.URL_TEST || 'http://localhost:3000/api';
let token;

describe('POST Contact', () => {
  it('should return a token', (done) => {
    chai.request(url)
      .post('/auth/login')
      .send({
        email: 'admin@admin.com',
        password: '123456',
      })
      .end((err, res) => {
        expect(res.body)
          .to
          .have
          .property('token');
        token = res.body.token;
        done();
      });
  });

  it('should return an error if name is missing', (done) => {
    chai.request(url)
      .post('/contacts')
      .set('Authorization', `Bearer ${token}`)
      .send({
        email: 'admin@admin.com',
        phone: '123456789',
        message: 'Test',
      })
      .end((err, res) => {
        expect(res)
          .to
          .have
          .status(400);
        expect(res.body)
          .to
          .have
          .property('errors');
        done();
      });
  });

  it('should return an error if email is missing', (done) => {
    chai.request(url)
      .post('/contacts')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Test',
        phone: '123456789',
        message: 'Test',
      })
      .end((err, res) => {
        expect(res)
          .to
          .have
          .status(400);
        expect(res.body)
          .to
          .have
          .property('errors');
        done();
      });
  });

  it('should create a new contact', (done) => {
    chai.request(url)
      .post('/contacts')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Test',
        email: 'admin@admin.com',
        phone: '123456789',
        message: 'Test',
      })
      .end((err, res) => {
        expect(res)
          .to
          .have
          .status(201);
        expect(res.body)
          .to
          .have
          .property('message');
        expect(res.body.message)
          .to
          .equal('Generated successfully');
        done();
      });
  });
});

describe('GET Contacts', () => {
  it('should return a list of contacts', (done) => {
    chai.request(url)
      .get('/contacts')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res)
          .to
          .have
          .status(200);
        expect(res.body)
          .to
          .have
          .property('data');
        expect(res.body.data).to.be.an('array');
        res.body.data.forEach((contact) => {
          expect(contact)
            .to
            .have
            .property('id');
          expect(contact)
            .to
            .have
            .property('name');
          expect(contact)
            .to
            .have
            .property('email');
          expect(contact)
            .to
            .have
            .property('phone');
          expect(contact)
            .to
            .have
            .property('message');
          expect(contact)
            .to
            .have
            .property('createdAt');
          expect(contact)
            .to
            .have
            .property('updatedAt');
        });
        done();
      });
  });
});

