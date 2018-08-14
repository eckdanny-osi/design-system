describe('Second Test', () => {
  it('Visit the app', () => {
    cy.visit('/');
    cy.get('[data-test=link-components]').click();
  });
});
