import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que estou na página de detalhes do produto "([^"]*)"$/, (nomeProduto) => {
  // Navegar para a página de produtos
  cy.visit('https://www.automationexercise.com/products');
  
  // Buscar e clicar no produto específico
  cy.get('.single-products').contains(nomeProduto).click();
  
  // Verificar se está na página de detalhes
  cy.url().should('include', '/product_details');
});

// When(/^clico no botão "([^"]*)"$/, (botao) => {
//   if (botao === "Adicionar ao Carrinho") {
//     cy.get('.add-to-cart').click();
//   }
// });
// Agora este comando está em comandos-comuns.steps.js

Then(/^devo ver uma notificação de que o produto foi adicionado ao carrinho$/, () => {
  cy.get('.modal-content').should('be.visible');
  cy.get('.modal-content').should('contain', 'Added!');
});

Then(/^o ícone do carrinho deve exibir a quantidade de "([^"]*)"$/, (quantidade) => {
  cy.get('.badge').should('contain', quantidade);
}); 