describe('Testes de responsividade e funcionalidade do portifolio', () => {
  const sizes = ['samsung-s10', 'ipad-2', 'macbook-13'];
  const heroImage = '';

  context('Testes de responsividade e funcionalidade mobile', () => {
    beforeEach(() => {
      cy.visit('./index.html')
      cy.viewport(sizes[0]);
    });

    it('Existe um componente header', () => {
      cy.get('header')
            .should('exist');
    });
    
    it('Está escrito portifólio no header', () => {
    	cy.get('#title-header')
        	.should('exist')
		cy.get('#title-header')
			  .should('have.text', 'Portifólio');
    });

	it('O botão do menu hamburger está presente', () => {
		cy.get('#hamburger')
			  .should('exist');
	});

  it('Inicialmente a navegação não é visivel', () => {
    cy.get('#menu')
        .should('be.hidden');
  })

  it('Ao clicar no botão hamburger, o menu de navegação aparece', () => {
    cy.get('#hamburger')
        .click()
    cy.get('#menu')
        .should('be.visible');
  });

  it('Na sessão "hero" o elemento image possui o src correto', () => {
    cy.get('#hero-image')
        .should('have.attr', 'src', './images/heroImage.png');
  });

  it('O "title" da sessão hero é "Breno Laskavski Lopes"', () => {
    cy.get('#hero-title')
        .should('have.text', 'Breno Laskavski Lopes');
  });

  it('O "about me" possui no minimo 100 caracteres', () => {
    cy.get('#hero-describe')
        .should('have.length', 100);
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