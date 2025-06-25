import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que estou na página de login$/, () => {
	cy.visit('https://www.automationexercise.com/login');
});

When(/^insiro "([^"]*)" no campo de email$/, (email) => {
	cy.get('[data-qa="login-email"]').type(email);
});

When(/^insiro "([^"]*)" no campo de senha$/, (senha) => {
	cy.get('[data-qa="login-password"]').type(senha);
});

// When(/^clico no botão "([^"]*)"$/, (botao) => {
//   cy.contains('button', botao).click();
// });
// Agora este comando está em comandos-comuns.steps.js

Then(/^vejo uma mensagem de boas-vindas "([^"]*)"$/, (mensagem) => {
	cy.get('.active > :nth-child(1) > h2').should('contain',mensagem)

});
