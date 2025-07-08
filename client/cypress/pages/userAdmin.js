import UserSucessPage from "../pages/userSucess.js";
const userSucess = new UserSucessPage()
const numberV = 2

const valores = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const tPower = Cypress._.sampleSize(valores, 2)

const index = Math.floor(Math.random() * 9) +1;
const index2 = Math.floor(Math.random() * 9) +1;

class userAdmin{

    functionAdmin(){

            userSucess.loginAdminUser()
            cy.get("[href='/heroes/new']").should('be.visible')
    }

    checkLogoutButtonAdmin(){

            userSucess.loginAdminUser()
            cy.get('li > .undefined').should('contain', 'Logout')

    }

    checkLogoutFunctionAdmin(){

        userSucess.loginAdminUser()
        cy.get('li > .undefined').should('contain', 'Logout')
        cy.get('li > .undefined').click()
        cy.get('li > .undefined').should('contain', 'Login')

    }

    checkEditHero(){

        userSucess.loginAdminUser()

        cy.get("[data-cy='fans']").eq(3).invoke("text").then((likeText) => {const initialLikes = parseInt(likeText, 10)
        cy.get("[data-cy='saves']").eq(3).invoke("text").then((saveText) => {const initialSaves = parseInt(saveText, 10)
        cy.get("[data-cy='price']").eq(3).invoke("text").then((text) => {const initialPrice = parseFloat(text.replace('$', '').trim());

        cy.get("[data-cy='pencil']").eq(3).click()
        cy.get("[novalidate='']").should('be.visible')

        cy.get("[name='price']").invoke("val").then((likeText) => {const price = parseInt(likeText,10)
        cy.get("[name='price']").clear().type((price+numberV).toString())
                })

        cy.get("[name='fans']").invoke("val").then((likeText) => {const fans = parseInt(likeText,10) 
        cy.get("[name='fans']").clear().type((fans+numberV).toString())
                })

        cy.get("[name='saves']").invoke("val").then((likeText) => {const saves = parseInt(likeText,10) 
        cy.get("[name='saves']").clear().type((saves+numberV).toString())
                })

        cy.get("[name='powers']").select(index.toString())
        cy.get("[name='powers']").find('option:selected').invoke("text").then((power) => {     
        cy.get(".bg-blue-700.text-white").eq(1).click()


        cy.get("[data-cy='fans']").eq(3).invoke("text").should((updatedText) => {const updatedLikes = parseInt(updatedText, 10);expect(updatedLikes).to.eq(initialLikes + numberV)
                })

        cy.get("[data-cy='saves']").eq(3).invoke("text").should((updatedText) => {const updatedSaves = parseInt(updatedText, 10);expect(updatedSaves).to.eq(initialSaves + numberV)
                })
        
        const updatedPrice = initialPrice + numberV;
        cy.get("[data-cy='price']").eq(3).should('contain', `$${updatedPrice}`)
        cy.get("[data-cy='powers']").eq(3).should('contain', power.toString())
                })        
            })
          })
        })
    }

    checkHero2Power(){

        userSucess.loginAdminUser()

        cy.get("[data-cy='pencil']").eq(5).click()
        cy.get("[novalidate='']").should('be.visible')

        cy.get("[name='powers']").select(tPower)

        cy.get("[name='powers']").find('option:selected').then((options) => {
    // Captura os textos dos poderes selecionados, separa com vírgula + espaço
        const poderesSelecionados = [...options].map(o => o.innerText.trim()).join(' ,')
        //cy.get("[name='powers']").find('option:selected').invoke("text").then((powerSelected) => {
        cy.get(".bg-blue-700.text-white").eq(1).click()

        //cy.get("[data-cy='powers']").eq(5).should('contain', powerSelected.toString() + '+4 more')
        cy.get("[data-cy='powers']").eq(5).invoke('text').then((textoQueApareceNaTela) => {
        expect(textoQueApareceNaTela).to.include(poderesSelecionados);
      });

        })
    }

}
export default userAdmin