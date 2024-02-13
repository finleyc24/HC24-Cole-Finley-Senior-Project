Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Load Home Page', () => {
  it('Visits Hanover College EAP', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Find location Link', () => {
  it('Finds the content "Stadium"', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Stadium')
  })
})

describe('Click location Link', () => {
  it('Clicks the content "Stadium"', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Stadium').click
  })
})

describe('Assert URL is correct', () => {
  it('clicking "Stadium" navigates to a new url', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Stadium').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/locations/1')
  })
})

describe('Find Diabetes Link', () => {
  it('Finds the content "Diabetes"', () => {
    cy.visit('http://localhost:3000/locations/1')

    cy.contains('Diabetes')
  })
})

describe('Click Diabetes Link', () => {
  it('Clicks the content "Diabetes"', () => {
    cy.visit('http://localhost:3000/locations/1')

    cy.contains('Diabetes').click
  })
})

describe('Assert URL is correct', () => {
  it('clicking "Diabetes" navigates to a new url', () => {
    cy.visit('http://localhost:3000/locations/1')

    cy.contains('Diabetes').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/locations/1/planTypes/1')
  })
})
