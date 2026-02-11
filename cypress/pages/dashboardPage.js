class dashboardPage {
    selectorsList () {
        const selectors = {
            dashboardGrid: '.orangehrm-dashboard-grid > :nth-child(1)',
        }
        return selectors
    }

    findDashboard (){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid)
    }
}

export default dashboardPage