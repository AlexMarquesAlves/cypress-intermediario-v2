describe('Login', () => {
  it('successfully', (user = Cypress.env('user_name'), password = Cypress.env(
    'user_password',
  )) => {
    cy.visit('/users/sign_in')
    cy.get("[data-qa-selector='login_field']").type(user)
    cy.get("[data-qa-selector='password_field']").type(password, { log: false })
    cy.get("[data-qa-selector='sign_in_button']").click()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
