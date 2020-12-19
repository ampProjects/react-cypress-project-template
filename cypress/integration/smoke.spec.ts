describe('Smoke Test', () => {
  it('makes sure React App message comes up', () => {
    cy.visit('http://localhost:3000')
      .contains('Learn React');
  });
});