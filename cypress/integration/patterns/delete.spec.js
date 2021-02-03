describe('Delete Navigation Test', () => {
  it('visits prototype kit', () => {
    cy.visit('localhost:3000');
    cy.get('nav').contains('Patterns').click();
    cy.contains('Delete').click();
    cy.url().should('include', '/patterns/delete');
  });
});
