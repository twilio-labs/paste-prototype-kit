const URL = 'localhost:3000';
context('Navigation', () => {
  beforeEach(() => {
    cy.visit(URL);
  });
  it('.children() - get child DOM elements', () => {
    cy.get('[data-cy=nav]').children('ul').should('not.have.length', 0);
  });
});
