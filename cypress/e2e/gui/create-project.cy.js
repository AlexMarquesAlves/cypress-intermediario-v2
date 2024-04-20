/* eslint-disable @typescript-eslint/no-unused-vars */
describe('Create a new project', () => {
  const projectForm = {
    blankProject: {
      projectName: 'Project101',
      projectURL: 'root',
      projectSlug: 'project-101',
      projectDescription: 'This is the first project I created on DevOpsDays.',
      visibilityLevel: {
        private: 'private',
        internal: 'internal',
        public: 'public',
      },
    },
  }

  it('shout create a new project', () => {
    cy.login()
    // Go to the projects page and click "New Project" button
    cy.get('.btn-success').should('be.visible').click()
    cy.visit('/projects/new')

    cy.get('#project_name')
      .should('be.visible')
      .type(projectForm.blankProject.projectName)
      .should('have.value', projectForm.blankProject.projectName)

    cy.get('#project_path')
      .should('be.visible')
      .clear()
      .type(projectForm.blankProject.projectSlug)
      .should('have.value', projectForm.blankProject.projectSlug)

    cy.get('#project_description')
      .should('be.visible')
      .type(projectForm.blankProject.projectDescription)
      .should('have.value', projectForm.blankProject.projectDescription)
    cy.get('#project_visibility_level_0').should('be.visible').check()
    cy.get('#project_visibility_level_10').should('be.visible').check()
    cy.get('#project_visibility_level_20').should('be.visible').check()
    cy.get('#project_initialize_with_readme')
      .should('be.visible')
      .check()
      .uncheck()
    cy.get('#blank-project-pane > #new_project > .btn-success').click()
  })
})
