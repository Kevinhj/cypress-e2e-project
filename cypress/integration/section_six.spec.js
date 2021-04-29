/// <reference types="Cypress" />

describe('Working with UI elements', () => {
    it('Checkbox test', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('#checkBoxOption1').check().should('be.checked')
      .and('have.value', 'option1');
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
      cy.get('input[type="checkbox"]').check(['option2', 'option3']); //selector to find all checkboxes, then check some of them
    })

    it('Static dropdown test', () => {
      cy.get('select').select('option2').should('have.value', 'option2');
    })

    it('Dynamic dropdown test', () => {
      cy.get('#autocomplete').type('ind');
      cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if($el.text() === 'India'){
          $el.click();
        }
      })
      cy.get('#autocomplete').should('have.value', 'India');
    })

    it('Visible and Invisible element test', () => {
      cy.get('#displayed-text').should('be.visible');
      cy.get('#hide-textbox').click();
      cy.get('#displayed-text').should('not.be.visible');
      cy.get('#show-textbox').click();
      cy.get('#displayed-text').should('be.visible');
    })

    it('Radio button tests', () => {
      cy.get('[value="radio2"]').check().should('be.checked');
    })

  })