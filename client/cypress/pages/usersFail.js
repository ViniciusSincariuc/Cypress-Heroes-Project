class userFailPage{
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

            userWrong(){
        return {
            emailWrong: "wrong@test.com",
            emailFormatInvalid: "test@testcom",
            emailCaractersInvalid: "test#@test.com",
            emailSpaceAfter: "test@test.com ",
            emailSpaceBefore: " test@test.com",
            emailSpaceMiddle: "test   @test.com",
            passwordWrong: "senhaerrada",
            passwordCaractersInvalid: "test123@",
            passwordSpaceBefore: "   test123",
            passwordSpaceAfter: "test123   ",
            passwordSpaceMiddle: "test 123"
        }
    }

            emailTPasswordF() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userTest().login)
                cy.get('[data-cy="password"]').type(this.userWrong().passwordWrong)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Invalid email or password')
        
        }

            emailFPasswordT() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userWrong().emailWrong)
                cy.get('[data-cy="password"]').type(this.userTest().password)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Invalid email or password')
        
        }

            emailFPasswordF() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userWrong().emailWrong)
                cy.get('[data-cy="password"]').type(this.userWrong().passwordWrong)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Invalid email or password')
        
        }

            whiteFilds() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get('.text-white').click()
                cy.get('.text-red-500').eq(0).should('contain', 'Email is required')
                cy.get('.text-red-500').eq(1).should('contain', 'Password is required')
        
        }

            onlyEmail() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userTest().login)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Password is required')
        
        }

            onlyPassword() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get('[data-cy="password"]').type(this.userTest().password)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Email is required')
        
        }

            emailInvalidFormat() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userWrong().emailFormatInvalid)
                cy.get('[data-cy="password"]').type(this.userTest().password)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Email is not valid')
        
        }

            passwordInvalidFormat() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userTest().login)
                cy.get('[data-cy="password"]').type(this.userWrong().passwordCaractersInvalid)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Invalid email or password')
        
        }

             emailIvalidCaracters() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userWrong().emailCaractersInvalid)
                cy.get('[data-cy="password"]').type(this.userTest().password)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Invalid email or password')
        
        }

            passwordIvalidCaracters() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userTest().login)
                cy.get('[data-cy="password"]').type(this.userWrong().passwordCaractersInvalid)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Invalid email or password')
        
        }

            emailBeforeSpace() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userWrong().emailSpaceBefore,)
                cy.get('[data-cy="password"]').type(this.userTest().password)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Invalid email or password')
        
        }

                emailAfterSpace() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userWrong().emailSpaceAfter,)
                cy.get('[data-cy="password"]').type(this.userTest().password)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Invalid email or password')
        
        }

                passwordBeforeSpace() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userTest().login)
                cy.get('[data-cy="password"]').type(this.userWrong().passwordSpaceBefore)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Invalid email or password')
        
        }

                passwordAfterSpace() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userTest().login)
                cy.get('[data-cy="password"]').type(this.userWrong().passwordSpaceAfter)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Invalid email or password')
        
        }

                emailMiddleSpace() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").invoke('attr', 'type', 'text').clear().type(this.userWrong().emailSpaceMiddle, {parseSpecialCharSequences: false })
                cy.get('[data-cy="password"]').type(this.userTest().password)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Email is not valid')
        
        }

                passwordMiddleSpace() {

                cy.visit('http://localhost:3000')
                cy.get('li > .undefined').click()
                cy.get("[data-cy='email']").type(this.userTest().login)
                cy.get('[data-cy="password"]').type(this.userWrong().passwordSpaceMiddle)
                cy.get('.text-white').click()
                cy.get('.text-red-500').should('contain', 'Invalid email or password')
        
        }


}
    export default userFailPage