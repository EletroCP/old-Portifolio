const { cyan } = require("colorette");

describe('Testes de responsividade e funcionalidade do portifolio', () => {
  const sizes = ['samsung-s10', 'ipad-2', 'macbook-13', [1680, 1050]]

  context('Testes de responsividade e funcionalidade mobile', () => {
    beforeEach(() => {
      cy.visit('./index.html')
      cy.viewport(sizes[1]);
    });
  });

  context('Testes de responsividade e funcionalidade tablet', () => {
    beforeEach(() => {
      cy.visit('./index.html')
      cy.viewport(sizes[2]);
    });
  });

  context('Testes de responsividade e funcionalidade notebook', () => {
    beforeEach(() => {
      cy.visit('./index.html')
      cy.viewport(sizes[3]);
    });
  });

  context('Testes de responsividade e funcionalidade monitor', () => {
    beforeEach(() => {
      cy.visit('./index.html')
      cy.viewport(sizes[4]);
    });
  });
});