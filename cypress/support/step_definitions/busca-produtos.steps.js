import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que estou na página de produtos$/, () => {
  cy.visit('/products');
});

When(/^insiro "([^"]*)" no campo de busca$/, (termoBusca) => {
  cy.get('#search_product').type(termoBusca);
});

 When(/^clico no botão de Busca$/, () => {
    cy.get('#submit_search').click();
 });

Then(/^devo ver uma lista de produtos que correspondem a "([^"]*)"$/, (termoBusca) => {
  cy.get('.features_items').should('be.visible');
  cy.get('.single-products').should('contain.text', termoBusca);
  
});

Then(/^a mensagem "([^"]*)" não deve ser exibida$/, (mensagem) => {
  if (mensagem === "Nenhum resultado encontrado") {
    cy.get('body').should('not.contain', mensagem);
  }
}); 