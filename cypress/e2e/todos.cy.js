/// <reference types="Cypress" />

describe("Checking Todos Application", () => {
    beforeEach(() => {
      cy.visit("http://example.cypress.io/todo");
    });
    it("should have the basic structure", () => {
      //input box is present
      cy.get(".new-todo").should("exist");
      //if todo count is present
      cy.get(".todo-count").should("exist");
      // if filters are present
      cy.get(".filters").should("exist");
    });
  
    //check if the user is able to add some Todos
    it("should be able to add some task", () => {
      cy.get(".todo-list").children().should("have.length", 2);
      cy.get(".new-todo").type("Learn React{enter}");
      cy.get(".new-todo").type("Learn Redux{enter}");
      cy.get(".new-todo").type("Learn Cypress{enter}");
      cy.get(".todo-list").children().should("have.length", 5);
    });
  
    it("should be able to increase task length in footer", () => {
      cy.get(".todo-count strong").should("have.text", 2);
      cy.get(".new-todo").type("Learn React{enter}");
      cy.get(".todo-count strong").should("have.text", 3);
    });
  });