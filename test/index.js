"use strict"
const supertestAsPromised = require('supertest-as-promised');
const app = require('../app');
const request = supertestAsPromised(app);

describe('Ruta raiz, Hola mundo', function() {
  describe('GET /', function(done) {
    it('should show hola mundo', function(done) {
      request
        .get('/')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .end((err, res) => {
          const { body } = res;
          expect(body).to.have.property('message', 'hola mundo');
          done(err);
        });
    });
  });
});