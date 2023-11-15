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

it("displays correct band name for band route that existed at build time", () => {
    cy.task("db:reset").visit("/bands/1")
    cy.findByRole("heading", {name: /Shamrock Pete/i}).should("exist")
})

it("displays band not found for the band route that does not exist", () => {
    cy.task("db:reset").visit("/bands/12333")
    cy.findByRole("heading", {name: /error: band not found/i}).should("exist")
})