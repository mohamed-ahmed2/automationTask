/// <reference types="cypress"/>

describe('Procuct Page Test Cases', () => {
  // to be executed before each test case
    beforeEach(() => {
        cy.visit('https://judge.me/reviews');
    })
    
    it('displays the product page correctly and shows available reviews', () => {
      // Loads the products fixture and selects the first product
      cy.fixture('products').then((products) => {
        const keyword = products[0].keyword 
        cy.searchProduct(keyword) 
        cy.url().should('contain', 'https://judge.me/search')

        //click on the first product
        cy.get('.product-search-card__inner').eq(0).click() 
        // Verifies the visibility of the product page elements
        cy.url().should('contain','https://judge.me/reviews')
        cy.get('.product-page__container-main').should('be.visible')
        cy.get('.product-page__container-side').should('be.visible')
        cy.get(".product-page__description").should('be.visible')
        cy.get('.product-info').should('be.visible')        
        
    })

    })
  
    it("verifies that 'View Product in Store' button is clickabe", () => {     
       // Loads the products fixture and selects the first product
        cy.fixture('products').then((products) => {
            const keyword = products[0].keyword
            cy.searchProduct(keyword)
            cy.url().should('contain', 'https://judge.me/search')
            cy.get('.product-search-card__inner').eq(0).click() // click on the first product
            cy.url().should('contain','https://judge.me/reviews')
            // verify view product in store button
            cy.contains('View Product in Store').first().should('be.visible')
            cy.contains('View Product in Store').first().should('have.attr', 'href').should('not.be.empty')
        })
    })
  })