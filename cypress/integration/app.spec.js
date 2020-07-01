describe('App initialization', () => {
  it('Loads search prompt', () => {
    cy.visit('/');

    cy.contains('FIND YOUR MOVIE');
    cy.contains('SEARCH BY:');
    cy.get('#searchBtn').contains('SEARCH');
    cy.contains('h1', 'No films found');
  });
});
