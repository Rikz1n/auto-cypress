import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    dashboardGrid: '.orangehrm-dashboard-grid > :nth-child(1)',
    myInfoButton: ':nth-child(6) > .oxd-main-menu-item',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    nationalityField: '.oxd-select-text',
    nationalityDropdown: '.oxd-select-dropdown',
    genericField: ''
  }

  

  it.only('Login - User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucceess.username, userData.userSucceess.password)
    
    
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField, { timeout: 10000 }).clear().type('Henrique')
    cy.get(selectorsList.middleNameField).clear().type('Galiano')
    cy.get(selectorsList.lastNameField).clear().type('Moraes')
    cy.get(selectorsList.nationalityField).eq(0).click()
    cy.get(selectorsList.nationalityDropdown).contains('Brazilian').click()

  })


  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})