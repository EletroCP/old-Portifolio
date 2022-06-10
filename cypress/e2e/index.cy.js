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
      cy.get('img#hero-img')
          .should('have.attr', 'src', './images/heroImage.png');
    });

    it('O "title" da sessão hero é "É um preser te conhecer!"', () => {
      cy.get('h1#hero-title')
          .should('have.text', 'É um preser te conhecer!');
    });

    it('O "about me" possui algo escrito', () => {
      cy.get('p#hero-describe')
          .should('not.be.empty');
    });

    it('O titulo da sessão de desenvolvimento é "Desenvolvimento"', () => {
      cy.get('h1#development-title')
          .should('have.text', 'Desenvolvimento')
    });

    it('O descritivo da sessão de desenvolvimento não estar vazio', () => {
      cy.get('h1#development-describe')
          .should('not.be.empty')
    });

    it('As imagens da área de desenvolvimento estão presentes', () => {
      cy.get('div#image-container')
          .find('img')
            .should('have.length', 7)
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