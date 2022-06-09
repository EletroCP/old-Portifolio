describe('Testes de responsividade e funcionalidade do portifolio', () => {
  const sizes = ['samsung-s10', 'ipad-2', 'macbook-13']

  context('Testes de responsividade e funcionalidade mobile', () => {
    beforeEach(() => {
      cy.visit('./index.html')
      cy.viewport(sizes[0]);
    });

    it('Existe um componente header', () => {
      cy.get('header')
            .should('exist')
    });
    
    it('Está escrito portifólio no header', () => {
    	cy.get('#title-header')
        	.should('exist')
		cy.get('#title-header')
			.should('have.text', 'Portifólio')
    });

	it('O botão do menu hamburger está presente', () => {
		cy.get('#hamburger')
			.should('exist')
	});
  });

  context('Testes de responsividade e funcionalidade tablet', () => {
    beforeEach(() => {
      cy.visit('./index.html')
      cy.viewport(sizes[1]);
    });

    it('pass', () => {
      
    });
  });

  context('Testes de responsividade e funcionalidade notebook e monitor', () => {
    beforeEach(() => {
      cy.visit('./index.html')
      cy.viewport(sizes[2]);
    });

    it('pass', () => {
      
    });
  });
});