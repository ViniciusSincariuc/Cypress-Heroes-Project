import UserSucessPage from "../pages/userSucess.js";
import 'cypress-file-upload';
import Chance from 'chance';

const chance = new Chance()
const userSucess = new UserSucessPage()

const numberV = 2
const name = chance.name()
const valores = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const tPower = Cypress._.sampleSize(valores, 2)

const index = Math.floor(Math.random() * 9) +1;
const pV = Math.floor(Math.random() * 99) +1;
const sV = Math.floor(Math.random() * 99) +1;
const fV = Math.floor(Math.random() * 99) +1;

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

    creatNewHero(){

        userSucess.loginAdminUser()
        cy.get(".bg-blue-700.text-white").click()

        cy.get("[data-cy='nameInput']").type("Mr Zebra")
        cy.get("[name='price']").type(pV)
        cy.get("[data-cy='fansInput']").type(fV)
        cy.get("[data-cy='savesInput']").type(sV)
        cy.get("[data-cy='powersSelect']").select(index.toString())
        cy.get("[data-cy='avatarFile']").attachFile('mrzebra.png')
        cy.get(".bg-blue-700").eq(1).click()

        cy.contains("[data-cy='hero-card']", "Mr Zebra").should('exist')

    }

    deletTestHero(){

        userSucess.loginAdminUser()
        cy.get(".bg-blue-700.text-white").click()
        cy.get("[data-cy='nameInput']").type("TestHeroDelet")
        cy.get("[name='price']").type(pV)
        cy.get("[data-cy='fansInput']").type(fV)
        cy.get("[data-cy='savesInput']").type(sV)
        cy.get("[data-cy='powersSelect']").select(index.toString())
        cy.get("[data-cy='avatarFile']").attachFile('avatar.jpg')
        cy.get(".bg-blue-700").eq(1).click()

        cy.get("[data-cy='hero-card']").contains("TestHeroDelet").parents("[data-cy='hero-card']").find("[data-cy='trash']").click()
        cy.get(".gap-4").contains("Delete Hero?").parents(".gap-4").find(".text-white").click()
        
    }

    deletHeroEditPage(){

        userSucess.loginAdminUser()
        cy.get(".bg-blue-700.text-white").click()
        cy.get("[data-cy='nameInput']").type("TestHeroDeletEdit")
        cy.get("[name='price']").type(pV)
        cy.get("[data-cy='fansInput']").type(fV)
        cy.get("[data-cy='savesInput']").type(sV)
        cy.get("[data-cy='powersSelect']").select(index.toString())
        cy.get("[data-cy='avatarFile']").attachFile('avatar.jpg')
        cy.get(".bg-blue-700").eq(1).click()

        cy.get("[data-cy='hero-card']").contains("TestHeroDeletEdit").parents("[data-cy='hero-card']").find("[data-cy='pencil']").click()
        cy.get("[type='button']").click()
        cy.get(".bg-white").contains("TestHeroDeletEdit").parents(".gap-4").find(".text-white").click()
        cy.get("[alt='Cypress Heroes Logo']").click()
        cy.contains("[data-cy='hero-card']", "TestHeroDeletEdit").should('not.exist')
    }

    creatHeroEqualName(){

        userSucess.loginAdminUser()
        cy.get(".bg-blue-700.text-white").click()

        cy.get("[data-cy='nameInput']").type("TestEqualHero")
        cy.get("[name='price']").type(pV)
        cy.get("[data-cy='fansInput']").type(fV)
        cy.get("[data-cy='savesInput']").type(sV)
        cy.get("[data-cy='powersSelect']").select(index.toString())
        cy.get("[data-cy='avatarFile']").attachFile('mrzebra.png')
        cy.get(".bg-blue-700").eq(1).click()

        cy.wait(1000)

        cy.get(".bg-blue-700.text-white").click()
        cy.get("[data-cy='nameInput']").type("TestEqualHero")
        cy.get("[name='price']").type(pV)
        cy.get("[data-cy='fansInput']").type(fV)
        cy.get("[data-cy='savesInput']").type(sV)
        cy.get("[data-cy='powersSelect']").select(index.toString())
        cy.get("[data-cy='avatarFile']").attachFile('mrzebra.png')
        cy.get(".bg-blue-700").eq(1).click()

        cy.wait(1000)

        cy.get("[data-cy='hero-card']").then(($cards) => {const matches = $cards.filter((i, el) =>
        el.innerText.includes("TestEqualHero"));
        expect(matches.length).to.eq(1); // ou .to.be.lessThan(2), se quiser tolerar 0 ou 1
        });
        
        //.contains("TestEqualHero").should('have.length', 1)
    }

    checkValuesHero(){

        userSucess.loginAdminUser()
        cy.get(".bg-blue-700.text-white").click()

        cy.get("[data-cy='nameInput']").type(name)
        cy.get("[name='price']").type(pV)
        cy.get("[data-cy='fansInput']").type(fV)
        cy.get("[data-cy='savesInput']").type(sV)
        cy.get("[data-cy='powersSelect']").select(index.toString())

        cy.get("[name='price']").invoke("val").then((likeText) => {const price = parseInt(likeText,10)
        cy.get("[name='fans']").invoke("val").then((likeText) => {const iFans = parseInt(likeText,10) 
        cy.get("[name='saves']").invoke("val").then((likeText) => {const iSaves = parseInt(likeText,10)
        cy.get("[name='powers']").find('option:selected').invoke("text").then((power) => { 

        cy.get("[data-cy='avatarFile']").attachFile('mrzebra.png')
        cy.get(".bg-blue-700").eq(1).click()

        cy.contains("[data-cy='hero-card']", name).should('exist')
        cy.get("[data-cy='hero-card']").contains(name).parents("[data-cy='hero-card']").within(() => {

        cy.get("[data-cy='fans']").invoke("text").then((updatedText) => { const vFans = parseInt(updatedText, 10);expect(vFans).to.eq(iFans)            
        cy.get("[data-cy='saves']").invoke("text").then((updatedText) => { const vSaves = parseInt(updatedText, 10);expect(vSaves).to.eq(iSaves)      
        cy.get("[data-cy='price']").should('contain', `$${price}`) 
        cy.get("[data-cy='powers']").should('contain', power.toString())
                         }) 
                        })
                       })
                      })
                     })
                    })
                   })
    }

        editImageHero(){

        userSucess.loginAdminUser()
        cy.get(".bg-blue-700.text-white").click()

        cy.get("[data-cy='nameInput']").type(name)
        cy.get("[name='price']").type(pV)
        cy.get("[data-cy='fansInput']").type(fV)
        cy.get("[data-cy='savesInput']").type(sV)
        cy.get("[data-cy='powersSelect']").select(index.toString())
        cy.get("[data-cy='avatarFile']").attachFile('mrzebra.png')
        cy.get(".bg-blue-700").eq(1).click()

        cy.wait(1000)
        
        cy.get("[data-cy='hero-card']").contains(name).parents("[data-cy='hero-card']").find("[data-cy='pencil']").click()
        cy.get("[data-cy='avatarFile']").attachFile('avatar.jpg')
        cy.get(".bg-blue-700").eq(1).click()

    }

    createHeroWhiteFilds(){

        userSucess.loginAdminUser()

        cy.get(".bg-blue-700.text-white").click()

        cy.get("[data-cy='avatarFile']").attachFile('avatar.jpg')
        cy.get(".bg-blue-700").eq(1).click()

        cy.contains(".text-red-500", 'Name is required').should('be.visible')
        cy.contains(".text-red-500", 'Price is required').should('be.visible')
        cy.contains(".text-red-500", 'Fans is required').should('be.visible')
        cy.contains(".text-red-500", 'Saves is required').should('be.visible')
        cy.contains(".text-red-500", 'Powers is required').should('be.visible')

    }

    createHeroNoName(){

        userSucess.loginAdminUser()

        cy.get(".bg-blue-700.text-white").click()

        cy.get("[name='price']").type(pV)
        cy.get("[data-cy='fansInput']").type(fV)
        cy.get("[data-cy='savesInput']").type(sV)
        cy.get("[data-cy='powersSelect']").select(index.toString())
        cy.get("[data-cy='avatarFile']").attachFile('avatar.jpg')
        cy.get(".bg-blue-700").eq(1).click()

        cy.contains(".text-red-500", 'Name is required').should('be.visible')


    }

    createHeroNoPrice(){

        userSucess.loginAdminUser()

        cy.get(".bg-blue-700.text-white").click()
        
        cy.get("[data-cy='nameInput']").type(name)
        cy.get("[data-cy='fansInput']").type(fV)
        cy.get("[data-cy='savesInput']").type(sV)
        cy.get("[data-cy='powersSelect']").select(index.toString())
        cy.get("[data-cy='avatarFile']").attachFile('avatar.jpg')
        cy.get(".bg-blue-700").eq(1).click()

        cy.contains(".text-red-500", 'Price is required').should('be.visible')


    }

    createHeroNoFans(){

        userSucess.loginAdminUser()
        cy.get(".bg-blue-700.text-white").click()

        cy.get("[data-cy='nameInput']").type(name)
        cy.get("[name='price']").type(pV)
        cy.get("[data-cy='savesInput']").type(sV)
        cy.get("[data-cy='powersSelect']").select(index.toString())
        cy.get("[data-cy='avatarFile']").attachFile('avatar.jpg')
        cy.get(".bg-blue-700").eq(1).click()

        cy.contains(".text-red-500", 'Fans is required').should('be.visible')

    }

    createHeroNoSaves(){

        userSucess.loginAdminUser()
        cy.get(".bg-blue-700.text-white").click()

        cy.get("[data-cy='nameInput']").type(name)
        cy.get("[name='price']").type(pV)
        cy.get("[data-cy='fansInput']").type(fV)
        cy.get("[data-cy='powersSelect']").select(index.toString())
        cy.get("[data-cy='avatarFile']").attachFile('avatar.jpg')
        cy.get(".bg-blue-700").eq(1).click()

        cy.contains(".text-red-500", 'Saves is required').should('be.visible')

    }

    createHeroNoPowers(){

        userSucess.loginAdminUser()
        cy.get(".bg-blue-700.text-white").click()

        cy.get("[data-cy='nameInput']").type(name)
        cy.get("[name='price']").type(pV)
        cy.get("[data-cy='fansInput']").type(fV)
        cy.get("[data-cy='savesInput']").type(sV)
        cy.get("[data-cy='avatarFile']").attachFile('avatar.jpg')
        cy.get(".bg-blue-700").eq(1).click()

       cy.contains(".text-red-500", 'Powers is required').should('be.visible')

    }

    createHeroNegativesValues(){

        const pN = -Math.floor(Math.random() * 100) - 1;
        const fN = -Math.floor(Math.random() * 100) - 1;
        const sN = -Math.floor(Math.random() * 100) - 1;

        userSucess.loginAdminUser()
        cy.get(".bg-blue-700.text-white").click()

        cy.get("[data-cy='nameInput']").type(name)
        cy.get("[name='price']").type(pN)
        cy.get("[data-cy='fansInput']").type(fN)
        cy.get("[data-cy='savesInput']").type(sN)
        cy.get("[data-cy='powersSelect']").select(index.toString())
        cy.get("[data-cy='avatarFile']").attachFile('avatar.jpg')
        cy.get(".bg-blue-700").eq(1).click()

        cy.wait(1000)

        cy.contains("[data-cy='hero-card']", name).should('not.visible')

    }

}
export default userAdmin