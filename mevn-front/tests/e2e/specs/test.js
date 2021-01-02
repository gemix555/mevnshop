// https://docs.cypress.io/api/introduction/api.html

describe('My Front Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/')
    cy.contains('h2', 'Home')
  })
})
