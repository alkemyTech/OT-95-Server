const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'http://localhost:3000/api';
let token;
let id;

describe('POST Activity', () => {
  it('Should get a token', (done) => {
    chai
      .request(url)
      .post('/auth/login')
      .send({ email: 'admin@admin.com', password: '123456' })
      .end((err, res) => {
        expect(res.body).to.have.property('token');
        token = res.body.token;
        done();
      });
  });

  it('should create a activity', (done) => {
    chai
      .request(url)
      .post('/activities')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        name: 'prueba activity test',
        content: 'content activity test'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        id = res.body.data.id;
        done();
      });
  });

  it('should receive error because name is missing', (done) => {
    chai
      .request(url)
      .post('/activities')
      .set({Authorization: `Bearer ${token}`})
      .send({
        content: 'content activity test'
      })
      .end((err, res) => {
        expect(res.body.errors[0].param).equal('name');
        expect(res).to.have.status(400);
        done();
      });
  });

  it('should receive error because content is missing', (done) => {
    chai
      .request(url)
      .post('/activities')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        name: 'name activity test'
      })
      .end((err, res) => {
        expect(res.body.errors[0].param).equal('content');
        expect(res).to.have.status(400);
        done();
      });
  });
});

describe('PUT Activity', () => {
  it('should update activity', (done) => {
    chai
      .request(url)
      .put(`/activities/${id}`)
      .set({ Authorization: `Bearer ${token}` })
      .send({
        name: 'prueba activity test updated',
        content: 'content activity test updated'
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should receive error because activity id dont exists', (done) => {
    chai
      .request(url)
      .put('/activities/99999')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        name: 'prueba activity test updated',
        content: 'content activity test updated'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).equal('Bad request');
        done();
      });
  });
});

describe('GET Activity', () => {
  it('should get all activities', (done) => {
    chai
      .request(url)
      .get('/activities')
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
