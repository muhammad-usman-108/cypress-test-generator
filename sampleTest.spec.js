describe("Sample Test", () => {
  it("should contain expected elements and attributes", () => {
    cy.get("html").should("exist");
    cy.get("html").should(
      "contain.text",
      "Header Content Click Me Some text Description text",
    );
    cy.get("head").should("exist");
    cy.get("body").should("exist");
    cy.get("body").should(
      "contain.text",
      "Header Content Click Me Some text Description text",
    );
    cy.get("#header").should("exist");
    cy.get("div#header").should("contain.text", "Header");
    cy.get("#content").should("exist");
    cy.get("div#content.main-content").should("contain.text", "Content");
    cy.get("button").should("exist");
    cy.get("button").click();
    cy.get("button").should("contain.text", "Click Me");
    cy.get("input").should("exist");
    cy.get("input").should("have.value", "Test Value");
    cy.get("textarea").should("exist");
    cy.get(".description").should("exist");
    cy.get("p.description").should("contain.text", "Description text");
  });
});
