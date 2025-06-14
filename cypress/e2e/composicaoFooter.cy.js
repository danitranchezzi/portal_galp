describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.galp.com/corp/pt/');
    cy.get('#onetrust-group-container')
    cy.get('#onetrust-reject-all-handler').click();
    cy.get('.footer-bar-list > ul > :nth-child(1) > a');
    cy.get('.footer-bar-list > ul > :nth-child(2) > a');
    cy.get('.footer-bar-list > ul > :nth-child(3) > a');
    cy.get('.footer-bar-list > ul > :nth-child(4) > a');
    cy.get('.footer-bar-list > ul > :nth-child(5) > a');
    cy.get('#dnn_ucGalpFooter_lnkOneTrust');
    cy.get('#dnn_ucGalpFooter_dnnCopyright_lblCopyright');

  })
})