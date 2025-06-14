describe('Validar composição header', () => {
  it('acesse a pagina inicial do portal', () => {
    cy.visit('https://www.galp.com/corp/pt/');
    cy.get('#onetrust-group-container')
    cy.get('#onetrust-reject-all-handler').click();
    cy.get('.hamburger-box').click();
    cy.get('.menuitem-34.has-submenu');
    cy.get('.menuitem-464.has-submenu');
    cy.get('.menuitem-522.has-submenu');
    cy.get('.menuitem-1959.has-submenu');
    cy.get('.main-menu > :nth-child(1) > :nth-child(5) > .has-submenu');
    cy.get('.menuitem-1818.has-submenu');
    cy.get('.main-menu > :nth-child(1) > :nth-child(7) > .has-submenu');

  })
})
