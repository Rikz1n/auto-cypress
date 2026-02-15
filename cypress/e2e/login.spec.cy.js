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
// mudei alguma coisa
  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.loginFailAlert()
    
    
  })
})