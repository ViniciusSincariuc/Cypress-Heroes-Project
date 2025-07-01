class casesUXPage{
    userTest(){
        return {
            login: "test@test.com",
            password: "test123",
            passwordWrong:"senhaerrada"
        }
    }


    clearMensageError() {

        cy.visit('http://localhost:3000')
        cy.get('li > .undefined').click()
        cy.get("[data-cy='email']").type(this.userTest().login)
        cy.get('[data-cy="password"]').type(this.userTest().passwordWrong)
        cy.get('.text-white').click()
        cy.get('.text-red-500').should('contain', 'Invalid email or password')
       
        }
    
    caractersOccult() {

        cy.visit('http://localhost:3000')
        cy.get('li > .undefined').click()
        cy.get("[data-cy='password']").should('have.attr', 'type', 'password')
        
        }

}

export default casesUXPage