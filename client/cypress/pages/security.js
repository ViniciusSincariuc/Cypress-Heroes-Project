class securityPage{

    routeEdit() {

        cy.visit('http://localhost:3000')
        cy.visit('http://localhost:3000/heroes/2/edit')
        cy.get("[data-cy='powersSelect']").should('be.disabled')
       
        }
    
    routeNew() {

        cy.visit('http://localhost:3000')
        cy.visit('http://localhost:3000/heroes/new')
        cy.get("[data-cy='powersSelect']").should('be.disabled')

        
        }

}

export default securityPage