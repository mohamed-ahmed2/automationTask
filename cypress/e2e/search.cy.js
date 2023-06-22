/// <reference types="cypress"/>

describe('Seach Test Cases', () => {
  
  beforeEach(() => {
    cy.visit('https://judge.me/reviews');
  })
  
  it('should display the search box correctly', () => {
    // Verifies that the search box is visible
    cy.get("#search-input").should('be.visible')

  })

  it('should have functional product search', () => {
    // Loads the products fixture and selects the first product's keyword
    cy.fixture('products').then((products) => {
      const keyword = products[0].keyword

    // searchProduct is a custom command and it is defined in support/commands.js
      cy.searchProduct(keyword)

      cy.url().should('contain', 'https://judge.me/search')

      // Verifies that the search results heading exists and contains the selected product's keyword
      cy.get('.search-results__result-heading').should('exist').and('contain.text', keyword)
    })
  })
})
