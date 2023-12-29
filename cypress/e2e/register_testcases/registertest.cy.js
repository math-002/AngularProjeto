/// <reference types = "cypress"/>


describe ('Register Test', ()=> {

    it ('Register test with out adding parameters in function', ()=>{

        cy.visit('http://localhost:4200')
        cy.get('a[routerlink="/register"]').click()
        cy.get("[name= 'fullName']").type("teste do cypress")
        cy.get("[name = 'email']").type("teste2@gmail.com")
        cy.get("[name = 'password']").type("123456")
        cy.get("[name = 'confirmPassword']").type("123456")
        cy.get("button[type='submit']").click()
    });
});