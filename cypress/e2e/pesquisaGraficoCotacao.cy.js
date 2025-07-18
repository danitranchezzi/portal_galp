describe('Validar pesquisa por data no gráfico da cotação', () => {
  it('selecionar data inicial e final e validar dado retornado no gráfico', () => {
    cy.visit('https://galp.com/corp/pt/investidores/informacao-ao-acionista/acao-da-galp/desempenho-da-acao');
    cy.get(h2).contains('Gráfico da cotação');
    cy.get(p).contains('O gráfico da cotação é uma ferramenta interativa que permite observar e analisar o desempenho da ação Galp relativamente a índices e a empresas comparáveis.');
    cy.get(span).contains('module-stock-chart_accessible-datapickers');
    

  })
})