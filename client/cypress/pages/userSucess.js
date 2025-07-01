class userSucessPage{
    userTest(){
        return {
            login: "test@test.com",
            password: "test123"
        }
    }

        userAdmin(){
        return {
            login: "admin@test.com",
            password: "test123"
        }
    }


    loginTestUser() {

        cy.visit('http://localhost:3000')
        cy.get('li > .undefined').click()
        cy.get("[data-cy='email']").type(this.userTest().login)
        cy.get('[data-cy="password"]').type(this.userTest().password)
        cy.get('.text-white').click()
        cy.get("[href='/heroes/new']").should('not.exist')
       
        }
    
    loginAdminUser() {

        cy.visit('http://localhost:3000')
        cy.get('li > .undefined').click()
        cy.get("[data-cy='email']").type(this.userAdmin().login)
        cy.get('[data-cy="password"]').type(this.userAdmin().password)
        cy.get('.text-white').click()
        cy.get("[href='/heroes/new']").should('be.visible')
        
        }

}

export default userSucessPage