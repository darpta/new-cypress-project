describe('ToDo App', () => {
  context('When page initially loaded', () => {
    beforeEach(() => {
      cy.visit('');
    })
    it('header of the page should be visible and have proper name', () => {
      cy.get(' .header h1').should('be.visible')
    })
    it('input should have proper placeholder', () => {
      cy.get('input').should('have.attr', 'placeholder', 'What needs to be done?')
    })
  })
})