context('Testes de responsividade e funcionalidade mobile', () => {
    context('Testes de responsividade e funcionalidade mobile', () => {
        beforeEach(() => {
          cy.visit('./index.html')
          cy.viewport('ipad-2');
        });
    
        it('Existe um componente header', () => {
          cy.get('header')
                .should('exist');
        });
        
        it('O componente header possui um logo', () => {
            cy.get('#logo')
                .should('exist')
            cy.get('#logo')
                  .should('have.attr', 'src', './images/eletroCP.png');
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
              .should('have.text', 'É um prazer te conhecer!');
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
          cy.get('div.carousel')
              .find('img')
                .should('have.length', 7)
        });
    
        it('O titulo da sessão de projeto é "Projetos".', () => {
          cy.get('h1#project-title')
              .should('have.text', 'Projetos')
        });
    
        it('O texto explicativo não está vazio', () => {
          cy.get('#describe-project')
              .should('exist')
               .and('not.be.empty')
        });
    
        it('O container de projetos não está vazio', () => {
            cy.get('#container-projects')
                .should('exist')
                  .and('not.be.empty')
        });
    
        it('O titulo da sessão de tecnolocias é "Tecnologias".', () => {
          cy.get('#technologies')
              .find('h1')
                .should('have.text', 'Tecnologias')
        });
    
        it('O descritivo da sessão não estar vazio', () => {
          cy.get('#technologies')
              .find('p.description')
                .should('not.be.empty')
        });
    
        it('A lista de tecnologias ter ao menos 8 listadas', () => {
          cy.get('#technologies')
              .find('p.box')
                .should('have.length', 8)
        });
    
        it('A primeira imagem é correspontende ao primeiro texto', () => {
          cy.get('.block-caroseul')
              .find('img.development-image')
                .should('be.visible')
                  .should('have.attr', 'src', './images/desenvolvimento/figma1.png', 'alt', 'Imagem do figma mostrando a estrutura para celular')
        });
      });
});