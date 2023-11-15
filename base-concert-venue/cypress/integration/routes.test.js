it("Displays correct heading when navigating to shows route", () => {
    cy.visit("/")
    cy.findByRole('button', {name: /shows/i}).click()
    cy.findByRole("heading", {name: /upcoming shows/i}).should("exist")
})

it("Displays correct heading when navigating to bands route", () => {
    cy.visit("/")
    cy.findByRole('button', {name: /bands/i}).click()
    cy.findByRole("heading", {name: /Our Illustrious Performers/i}).should("exist")
})