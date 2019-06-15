const app = require('../src/app')
const { API_TOKEN } = process.env


describe('App', () => {
  it('returns unauthorized without Auth headers', () => {
    return supertest(app)
      .get('/')
      .expect(401, {"error":"Unauthorized request"})
  });

  it.only('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app)
      .get('/')
      .set({"Authorization": 'Bearer ' + API_TOKEN} )
      .expect(200, 'Hello, world!')
  })
})