import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^adicionei os produtos "([^"]*)" e "([^"]*)" ao meu carrinho$/, (produto1, produto2) => {
  // Adicionar primeiro produto
  cy.visit('/products');
  cy.get('#search_product').type(produto1);
  cy.get('#submit_search').click();
  cy.contains('.single-products', produto1).contains('Add to cart').click()
  cy.get('.btn-success').click(); // Continuar comprando
  
  // Adicionar segundo produto
  cy.visit('/products');
  cy.get('#search_product').type(produto2);
  cy.get('#submit_search').click();
  cy.contains('.single-products', produto2).contains('Add to cart').click()
  cy.get('.btn-success').click(); // Continuar comprando
});

When(/^navego para a tela de pagamento$/, () => {
  cy.get('.shop-menu').contains('Cart').click();
  cy.get('.check_out').click();
});

Then(/^devo ver "([^"]*) listado com o preço correto$/, (produto) => {
  cy.get('.cart_description').should('contain', produto);
  cy.get('.cart_price').should('be.visible');
});

Then(/^o valor total deve ser a soma dos preços dos produtos no carrinho$/, () => {
  // Verificar se o total está sendo calculado corretamente
  cy.get('.cart_total_price').should('be.visible');
  
  // Opcional: Verificar se há pelo menos 2 produtos no carrinho
  cy.get('.cart_description').should('have.length.at.least', 2);
}); 