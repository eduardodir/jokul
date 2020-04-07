/// <reference types="cypress" />

context("Accordion", () => {
    beforeEach(() => {
        cy.visit("/komponenter/accordion");
    });

    it("Accordion should work", () => {
        cy.get("[data-testid=jkl-accordion]").toMatchImageSnapshot();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get("[data-testid=jkl-accordion]").wait(100).toMatchImageSnapshot();
        cy.get("[data-testid=jkl-accordion-item]")
            .first()
            .click()
            .get("[data-testid=jkl-accordion]")
            .toMatchImageSnapshot();
    });
});
