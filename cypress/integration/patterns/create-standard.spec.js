describe('Delete Navigation Test', () => {
  it('visits prototype kit', () => {
    cy.visit('localhost:3000');
    cy.get('[data-cy=nav]').contains('Patterns').click();
    cy.contains('Create').click();
    cy.url().should('include', '/patterns/create-standard');
  });
});

describe('Create Pattern', () => {
  const haveValue = 'have.value';
  const createStandardURL = 'localhost:3000/patterns/create-standard';
  const createNewServiceButton = '[data-cy=create-new-service]';
  const sidInput = '[data-cy=sid-modal-input]';
  const serviceInput = '[data-cy=service-modal-input]';
  const modalSubmitButton = '[data-cy=submit-modal-input]';
  const servicesTable = '[data-cy=create-services-table]';
  const servicesTableRow = '[data-cy=serviceName01282021-row]';

  it('it should create a service with Service Name and SID', () => {
    cy.visit(createStandardURL);
    cy.get(createNewServiceButton).click();
    cy.get(sidInput).type('testSID01282021');
    cy.get(serviceInput).type('serviceName01282021');
    cy.get(modalSubmitButton).click();
    cy.get(servicesTable).contains('testSID01282021');
    cy.get(servicesTable).contains('serviceName01282021');
    cy.get(servicesTableRow).contains('testSID01282021');
    cy.get(servicesTableRow).contains('serviceName01282021');
  });
  it('It should not submit with empty fields', () => {
    cy.visit(createStandardURL);
    cy.get(createNewServiceButton).click();
    cy.get(modalSubmitButton).click();
    cy.get('[data-cy=create-services-modal]').contains('Please enter a service name.');
    cy.get('[data-cy=create-services-modal]').contains('Please enter a SID value.');
  });
  it('It should reset create services modal state', () => {
    cy.visit(createStandardURL);
    cy.get(createNewServiceButton).click();
    cy.get(sidInput).type('testSID01282021');
    cy.get(serviceInput).type('serviceName01282021');
    cy.get('[data-cy=close-service-modal]').click();
    cy.get(createNewServiceButton).click();
    cy.get(sidInput).should(haveValue, '');
    cy.get(serviceInput).should(haveValue, '');
  });
  it('It should clear form fields after successful submit', () => {
    cy.visit(createStandardURL);
    cy.get(createNewServiceButton).click();
    cy.get(sidInput).type('testSID01282021');
    cy.get(serviceInput).type('serviceName01282021');
    cy.get(modalSubmitButton).click();
    cy.get(servicesTable).contains('testSID01282021');
    cy.get(servicesTable).contains('serviceName01282021');
    cy.get(servicesTableRow).contains('testSID01282021');
    cy.get(servicesTableRow).contains('serviceName01282021');
    cy.get(createNewServiceButton).click();
    cy.get(sidInput).should(haveValue, '');
    cy.get(serviceInput).should(haveValue, '');
  });
});
