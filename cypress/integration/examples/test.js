/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('Does not do much!', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise');
      cy.get('.search-keyword').type('ca');
      cy.wait(2000);

      cy.get('.product:visible').should('have.length', 4);

      // .find search only for .product child elements of .products
      // search elements within .products -> which is the target parent
      cy.get('.products').find('.product').should('have.length', 4);

      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

      cy.get('.products').find('.product').each(($el, index, $list) => {

        // selector to find the product name
        //$el is the current element on the loop
        const productName = $el.find('h4.product-name').text();
        // $el is a wrapped jQuery element
        if (productName.includes('Cashews')) {
          // wrap this element so we can
          // use cypress commands on it
          $el.find('button').click();
        } else {
          // do something else
        }
      }) //end of each
      
      cy.get('.brand').then(function(logo){
        cy.log(logo.text());
      })
      //expect(true).to.equal(true)
    })
  })