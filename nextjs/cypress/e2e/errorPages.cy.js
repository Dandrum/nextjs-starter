// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Error Pages', () => {
   describe('404', () => {
    it('Show 404', () => {
      cy.visit(Cypress.env('baseUri') + '/404', {failOnStatusCode: false});

      cy.url().should('include', '/404');
      cy.get('h1').should('contain', 'Not Found');
    })
  })
});
