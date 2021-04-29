/// <reference types="Cypress" />

describe('Test Scenarios for section 7', () => {
    it.only('Handle Alerts', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

      //Cypress auto accepts alerts and popups by default and cannot change that behaviour
      //Cypress have capability to listening for browser events window:alert
      cy.get('#alertbtn').click();
       

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })

      //2
      cy.get('[value="Confirm"]').click();
      const stub = cy.stub();
      cy.on('window:confirm', stub);
      cy
        .get('[value="Confirm"]').click().then( () => {
          expect(stub.getCall(0)).to.be.calledWith('Hello , Are you sure you want to confirm?')
        })

    })

  })