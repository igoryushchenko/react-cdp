describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should show movie details card on movie click', () => {

    const typedText = 'random';

    cy.get('#movieQuery')
      .type(typedText)
      .should('have.value', typedText);

    cy.get('#searchBtn').click();

    cy.get('div.card').first().click();

    cy.get('div.card-details').within(() => {
      cy.get('div.card-details-main').should('be.visible');
    });

  });

  it('Should show search form on search click', () => {

    const typedText = 'random';

    cy.get('#movieQuery')
      .type(typedText)
      .should('have.value', typedText);

    cy.get('#searchBtn').click();

    cy.get('div.card').first().click();

    cy.get('div.card-body').within(() => {
      cy.get('#toggleSearch').click();
    });

    cy.get('div.card-details').should('not.exist');

    cy.contains('FIND YOUR MOVIE');
    cy.contains('SEARCH BY:');
    cy.get('#searchBtn').contains('SEARCH');

  });

});
