import UserSucessPage from "../pages/userSucess.js";

const userSucess = new UserSucessPage()


const powers = Math.floor(Math.random() * 9) +1;
const indexPrice = Math.floor(Math.random() * 99) +1;
const indexSave = Math.floor(Math.random() * 99) +1;
const indexFans = Math.floor(Math.random() * 99) +1;


class userTest{


    checkLikeHero() {

        userSucess.loginTestUser();

            cy.get("[data-cy='fans']").eq(0).invoke("text").then((likeText) => {const initialLikes = parseInt(likeText, 10);
            cy.get("[data-cy='like']").eq(0).click()
            cy.get("[data-cy='fans']").eq(0).invoke("text").should((updatedText) => {const updatedLikes = parseInt(updatedText, 10);expect(updatedLikes).to.eq(initialLikes + 1);
        
          })
      })     
    }

    checkSaveHero() {

        userSucess.loginTestUser();

            cy.get("[data-cy='saves']").eq(0).invoke("text").then((likeText) => {const initialLikes = parseInt(likeText, 10);
            cy.get("[data-cy='money']").eq(0).click()
            cy.get(".text-white").click()
            cy.get("[data-cy='saves']").eq(0).invoke("text").should((updatedText) => {const updatedLikes = parseInt(updatedText, 10);expect(updatedLikes).to.eq(initialLikes + 1);
        
          })
      })     
    }

    checkNewRoute(){

        userSucess.loginTestUser()
        cy.visit('http://localhost:3000/heroes/new')
        cy.get("[data-cy='powersSelect']").should('be.disabled')

    }

    createNewHeroTest(){

        userSucess.loginTestUser()
        cy.visit("http://localhost:3000/heroes/new")
        cy.get("[name='name']").clear().type("ant")
        cy.get("[name='price']").clear().type((indexPrice).toString())
        cy.get("[name='fans']").clear().type((indexFans).toString())
        cy.get("[name='saves']").clear().type((indexSave).toString())
        cy.get("[name='powers']").select(powers.toString())
        cy.get(".bg-blue-700").click()
    }

    checkEditRoute(){

        userSucess.loginTestUser()
        cy.visit('http://localhost:3000/heroes/2/edit')
        cy.get("[data-cy='powersSelect']").should('be.disabled')

    }

    msgErrorEditHero(){

        userSucess.loginTestUser()
        cy.visit('http://localhost:3000/heroes/5/edit')
        cy.get("[name='price']").clear().type((indexPrice).toString())
        cy.get("[name='fans']").clear().type((indexFans).toString())
        cy.get("[name='saves']").clear().type((indexSave).toString())
        cy.get("[name='powers']").select(powers.toString())
        cy.get(".text-white").eq(1).click()
        cy.get(".shadow-lg").should('be.visible', "Something went wrong")
        

    }

    checkLogoutButton(){

        userSucess.loginTestUser()
        cy.get('li > .undefined').should('contain', 'Logout')

    }

    checkLogoutFunction(){

        userSucess.loginTestUser()
        cy.get('li > .undefined').should('contain', 'Logout')
        cy.get('li > .undefined').click()
        cy.get('li > .undefined').should('contain', 'Login')

    }

    
}
export default userTest