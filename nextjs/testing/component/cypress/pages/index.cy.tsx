import Home from './index';

describe('<Home>', () => {
  it('should render the content', () => {
    cy.mount(<Home />);

    cy.get('h1').contains('Next.js Component Testing using Cypress');
    cy.get('button').should('be.visible');
  });
});


