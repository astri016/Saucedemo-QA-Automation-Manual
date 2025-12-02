Cypress.Commands.add('login', (username) => {
  cy.visit('https://www.saucedemo.com/', {
  onBeforeLoad: (win) => {
    // Matikan backtrace errors
    Object.defineProperty(win, 'fetch', { value: undefined })
  },
  timeout: 60000,
  pageLoadTimeout: 60000,
})

    cy.get('#user-name').type(username, { force: true })
    cy.get('#password').type('secret_sauce', { force: true })
    cy.get('#login-button').click({ force: true })

})
