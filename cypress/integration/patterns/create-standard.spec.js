describe('Delete Navigation Test', () => {
  it('visits prototype kit', () => {
    cy.visit('localhost:3000');
    cy.get('[data-cy=nav]').contains('Patterns').click();
    cy.contains('Create').click();
    cy.url().should('include', '/patterns/create-standard');
  });
});

describe('Create Pattern', () => {
  it('it should create a service with Service Name and SID', () => {
    cy.visit('localhost:3000/patterns/create-standard');
    cy.get('[data-cy=create-new-service]').click();
    cy.get('[data-cy=sid-modal-input]').type('testSID01282021');
    cy.get('[data-cy=service-modal-input]').type('serviceName01282021');
    cy.get('[data-cy=submit-modal-input]').click();
    cy.get('[data-cy=create-services-table]').contains('testSID01282021');
    cy.get('[data-cy=create-services-table]').contains('serviceName01282021');
    cy.get('[data-cy=serviceName01282021-row]').contains('testSID01282021');
    cy.get('[data-cy=serviceName01282021-row]').contains('serviceName01282021');
  });
  it('It should not submit with empty fields', () => {
    cy.visit('localhost:3000/patterns/create-standard');
    cy.get('[data-cy=create-new-service]').click();
    cy.get('[data-cy=submit-modal-input]').click();
    cy.get('[data-cy=create-services-modal]').contains('Please enter a service name.');
    cy.get('[data-cy=create-services-modal]').contains('Please enter a SID value.');
  });
  it('It should reset create services modal state', () => {
    cy.visit('localhost:3000/patterns/create-standard');
    cy.get('[data-cy=create-new-service]').click();
    cy.get('[data-cy=sid-modal-input]').type('testSID01282021');
    cy.get('[data-cy=service-modal-input]').type('serviceName01282021');
    cy.get('[data-cy=close-service-modal]').click();
    cy.get('[data-cy=create-new-service]').click();
    cy.get('[data-cy=sid-modal-input]').should('have.value', '');
    cy.get('[data-cy=service-modal-input]').should('have.value', '');
  });
  it('It should clear form fields after successful submit', () => {
    cy.visit('localhost:3000/patterns/create-standard');
    cy.get('[data-cy=create-new-service]').click();
    cy.get('[data-cy=sid-modal-input]').type('testSID01282021');
    cy.get('[data-cy=service-modal-input]').type('serviceName01282021');
    cy.get('[data-cy=submit-modal-input]').click();
    cy.get('[data-cy=create-services-table]').contains('testSID01282021');
    cy.get('[data-cy=create-services-table]').contains('serviceName01282021');
    cy.get('[data-cy=serviceName01282021-row]').contains('testSID01282021');
    cy.get('[data-cy=serviceName01282021-row]').contains('serviceName01282021');
    cy.get('[data-cy=create-new-service]').click();
    cy.get('[data-cy=sid-modal-input]').should('have.value', '');
    cy.get('[data-cy=service-modal-input]').should('have.value', '');
  });
});
