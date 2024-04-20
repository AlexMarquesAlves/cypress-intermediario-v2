describe('Login', () => {
  it('should login successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
