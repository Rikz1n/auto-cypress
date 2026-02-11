class myinforPage {
    selectorsList () {
        const selectors = {
            myInfoButton: ':nth-child(6) > .oxd-main-menu-item',
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            nationalityField: '.oxd-select-text',
            nationalityDropdown: '.oxd-select-dropdown',
            saveButton: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'
        }
        return selectors
    }

    findMyinfoPage(){
        cy.get(this.selectorsList().myInfoButton).click()
    }

    updateMyinfos(){
        cy.get(this.selectorsList().firstNameField, { timeout: 10000 }).clear().type('Henrique')
        cy.get(this.selectorsList().middleNameField).clear().type('Galiano')
        cy.get(this.selectorsList().lastNameField).clear().type('Moraes')
        cy.get(this.selectorsList().nationalityField).eq(0).click()
        cy.get(this.selectorsList().nationalityDropdown).contains('Brazilian').click()
        cy.get(this.selectorsList().saveButton).click()
    }
}

export default myinforPage