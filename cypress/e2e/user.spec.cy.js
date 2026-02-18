import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyinfoPage from '../pages/myinfoPage.js'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myinfoPage = new MyinfoPage

describe('User Orange HRM Tests', () => {

  it('Login - User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucceess.username, userData.userSucceess.password)
    dashboardPage.findDashboard()
    myinfoPage.findMyinfoPage()
    myinfoPage.updateMyinfosFullName(chance.first(), chance.last(), chance.last())
    myinfoPage.updateMyinfosNationality('Brazilian')
  })
    
})