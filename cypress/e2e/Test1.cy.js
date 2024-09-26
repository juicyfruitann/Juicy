/// <reference types = "Cypress" />
it('Searching y ID', () => {
    cy.visit('https://vk.com/')
    cy.get('#index_email')
})

it('Searching by Class', () => {
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
    cy.get('.DocSearch-Button-Placeholder')
})

it('Searching by Tag', () => {
    cy.visit('https://app.pooling.me/reservations')
    cy.get('nav')
})

it('Searching by Tag value', () => {
    cy.visit('https://vk.com/')
    cy.get('svg[xmlns="http://www.w3.org/2000/svg"][fill="none"]')
})

it('Searching by contains name', () => {
    cy.visit('https://vk.com/')
    cy.get('*[class^="Flat"]')
})