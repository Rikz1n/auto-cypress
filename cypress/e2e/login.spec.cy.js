import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyinfoPage from '../pages/myinfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myinfoPage = new MyinfoPage

describe('Orange HRM Tests', () => {

  it('Login - User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucceess.username, userData.userSucceess.password)
    dashboardPage.findDashboard()
    myinfoPage.findMyinfoPage()
    myinfoPage.updateMyinfosFullName('Henrique', 'Galiano', 'Moraes')
    myinfoPage.updateMyinfosNationality('Brazilian')
  })


  /* it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  }) */
})