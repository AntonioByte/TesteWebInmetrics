import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que pesquiso pelo produto "([^"]*)"$/, (termoBusca) => {
  // Navegar para a página de produtos
  cy.visit('/products');
  // Buscar e clicar no produto específico
  cy.get('#search_product').type(termoBusca);
  cy.get('#submit_search').click();
 
});


 When(/^clico no botão Adicionar ao Carrinho$/, () => {
  cy.contains('Add to cart').click();
});


Then(/^devo ver uma notificação de que o produto foi adicionado ao carrinho$/, () => {
  cy.get('.modal-content').should('be.visible');
  cy.get('.modal-content').should('contain', 'Added!');
});

