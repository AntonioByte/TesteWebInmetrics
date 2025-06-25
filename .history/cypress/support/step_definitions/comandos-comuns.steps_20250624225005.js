import { When } from "@badeball/cypress-cucumber-preprocessor";

// Step comum para clicar em botões por texto
When(/^clico no botão "([^"]*)"$/, (botao) => {
  cy.contains('button', botao).click();
}); 