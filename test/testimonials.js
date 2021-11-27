const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const userRepository = require('../app/repositories/users-repository');
const generateJwt = require('../app/helpers/generate-jwt');

chai.use(chaiHttp);

const url = 'http://localhost:3000/api';
let token;


describe('GET Testimonials', () => {
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

  it('Should get all testimonials', (done) => {
    chai
      .request(url)
      .get('/testimonials')
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Should get and empty array for introduce and incorrect page', (done) => {
    chai
      .request(url)
      .get('/testimonials?page=99')
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.data).to.have.length(0);
        done();
      });
  });

  it('Should get one testimonial for the id', (done) => {
    chai
      .request(url)
      .get('/testimonials/1')
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Should get and error for searching a testimonial that doesn´t exist', (done) => {
    chai
      .request(url)
      .get('/testimonials/999')
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('Should get and error for trying to get all testimonials with non token', (done) => {
    chai
      .request(url)
      .get('/testimonials')
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});

describe('POST Testimonials', () => {
  it('should create a testimonial', (done) => {
    chai
      .request(url)
      .post('/testimonials')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        name: 'example testimonial',
        content: 'content example of a testimonial'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.message).to.have.string('Generated successfully');
        done();
      });
  });

  it('should get error for non introduce a name for the testimonial', (done) => {
    chai
      .request(url)
      .post('/testimonials')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        content: 'content example of a testimonial'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });

  it('Should get and error for trying to create a testimonial with non token', (done) => {
    chai
      .request(url)
      .post('/testimonials')
      .send({
        name: 'example testimonial',
        content: 'content example of a testimonial'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});

describe('PUT testimonials', () => {
  it('Should update a testimonial for the id', (done) => {
    chai
      .request(url)
      .put('/testimonials/1')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        name: 'example testimonial updated',
        content: 'content example of a testimonial updated'
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.have.string('Updated successfully');
        done();
      });
  });

  it('Should get and error for trying to update a testimonial that doesn´t exist', (done) => {
    chai
      .request(url)
      .put('/testimonials/999')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        content: 'content example of a testimonial updated'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });

  it('Should get and error for trying to update a testimonial with non token', (done) => {
    chai
      .request(url)
      .put('/testimonials/1')
      .send({
        content: 'content example of a testimonial updated'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});

describe('DELETE testimonials', () => {
  it('Should delete a testimonial for the id', (done) => {
    chai
      .request(url)
      .delete('/testimonials/1')
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.have.string('Deleted successfully');
        done();
      });
  });

  it('Should get and error for trying to delete a testimonial that doesn´t exist', (done) => {
    chai
      .request(url)
      .put('/testimonials/999')
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });

  it('Should get and error for trying to delete a testimonial with non token', (done) => {
    chai
      .request(url)
      .put('/testimonials/1')
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});

