describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Accepts input', () => {
    const typedText = 'random';

    cy.get('#movieQuery')
      .type(typedText)
      .should('have.value', typedText);
  });

  it('Show no results message on empty search string', () => {
    cy.get('#searchBtn').click();

    cy.contains('h1', 'No films found');
  });

  it('Don`t show no results message on non-empty search string', () => {
    const typedText = 'random';

    cy.get('#movieQuery')
      .type(typedText)
      .should('have.value', typedText);

    cy.get('#searchBtn').click();

    cy.contains('No films found').should('not.exist');
  });

  it('Show result items on non-empty search string', () => {
    const typedText = 'random';

    cy.get('#movieQuery')
      .type(typedText)
      .should('have.value', typedText);

    cy.get('#searchBtn').click();

    cy.get('div.card').should('be.visible');
  });
});
