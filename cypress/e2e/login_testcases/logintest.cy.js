/// <reference types = "cypress"/>

describe ('Login Test', ()=> {

    it ('Login test with out adding parameters in function', ()=>{

        cy.visit('http://localhost:4200')
        cy.get("[name = 'email']").type("matheus@gmail.com")
        cy.get("[name = 'password']").type("123456")
        cy.get("button[type='submit']").click()
           .log('Login to the application is successful')
    });
});