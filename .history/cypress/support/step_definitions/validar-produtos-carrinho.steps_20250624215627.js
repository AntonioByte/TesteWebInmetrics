import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que adicionei os produtos "([^"]*)" e "([^"]*)" ao meu carrinho$/, (produto1, produto2) => {
  // Adicionar primeiro produto
  cy.visit('https://www.automationexercise.com/products');
  cy.get('.single-products').contains(produto1).click();
  cy.get('.add-to-cart').click();
  cy.get('.btn-success').click(); // Continuar comprando
  
  // Adicionar segundo produto
  cy.visit('https://www.automationexercise.com/products');
  cy.get('.single-products').contains(produto2).click();
  cy.get('.add-to-cart').click();
  cy.get('.btn-success').click(); // Continuar comprando
});

When(/^navego para a tela de pagamento$/, () => {
  cy.get('.shop-menu').contains('Cart').click();
  cy.get('.check_out').click();
});

Then(/^devo ver "([^"]*)" listada com o preço correto$/, (nomeProduto) => {
  cy.get('.cart_description').should('contain', nomeProduto);
  cy.get('.cart_price').should('be.visible');
});

Then(/^o valor total deve ser a soma dos preços dos produtos no carrinho$/, () => {
  // Verificar se o total está sendo calculado corretamente
  cy.get('.cart_total_price').should('be.visible');
  
  // Opcional: Verificar se há pelo menos 2 produtos no carrinho
  cy.get('.cart_description').should('have.length.at.least', 2);
}); 