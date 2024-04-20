describe('Logout by GUI', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('should logout successfully', () => {
    cy.logout()

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
  })
})
