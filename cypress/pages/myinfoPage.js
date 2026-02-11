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

    updateMyinfosFullName(firstName, middleName, lastName){
        cy.get(this.selectorsList().firstNameField).scrollIntoView({ offset: { top: -100, left: 0 } }).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    updateMyinfosNationality(nation){
        cy.get(this.selectorsList().nationalityField).eq(0).click()
        cy.get(this.selectorsList().nationalityDropdown).contains(nation).click()
        cy.get(this.selectorsList().saveButton).click()
    }
}

export default myinforPage