describe('App', () => {
  it('should have a list of pages', () => {
    // Go to the home page.
    cy.visit('http://localhost:3000/')

    cy.get('#pages li')
      .should('be.visible')
      .and('have.length', 9);
  })
});

// Make it a module, as cypress, for some reason, treats this file as a global script file
// and the isolatedModules == true in tsconfig.json disallows this behavior.
export {}


