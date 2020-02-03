/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  it('should have a headline', () => {
    cy.get('h1').should("contain.text", "Tic Tac Toe")
  });

  it('should start with an empy cell');
  it('should start be marked with an X');
  it('should mark with an O after 2nd Click');
  it('should mark with an O after 2nd Click, in the third row');
  it('should determine a winner');
  it('allow to enter player names');
  it('player names should be corrected to Uppercase');
  it('player should be declared winner with a name');

})
