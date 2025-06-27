import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^adicionei o produto "([^"]*)" ao meu carrinho$/, (produto) => {
  // Adicionar primeiro produto
  cy.visit('/products');
  cy.get('#search_product').type(produto);
  cy.get('#submit_search').click();
  cy.contains('.single-products', produto).contains('Add to cart').click()
  // Botão continuar comprando
  cy.get('.btn-success').click();
});

When(/^navego para a tela de pagamento$/, () => {
  cy.get('.shop-menu').contains('Cart').click();
  cy.get('.check_out').click();
});

Then(/^devo ver o produto "([^"]*)" listado com o preço correto$/, (produto) => {
  cy.get('.cart_description').should('contain', produto);
  cy.get('.cart_price').should('be.visible');
});

