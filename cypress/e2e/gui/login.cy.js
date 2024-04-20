describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })

  it.only('should logout', () => {
    cy.get('.qa-user-avatar').should('be.visible').click()
    cy.get('li.sign-out-link').should('be.visible').click()
  })
})
