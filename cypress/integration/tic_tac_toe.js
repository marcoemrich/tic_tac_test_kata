/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  it('should Mark a Cell with X', () => {
    cy.get('h1').should("contain.text", "Tic Tac Toe")
  });

})
