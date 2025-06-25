import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que estou na página de login$/, () => {
	cy.visit('https://www.automationexercise.com/login')
});

When(/^insiro "([^"]*)" no campo de email$/, (args1) => {
	cy.get('[data-qa="login-email"]').
});

When(/^insiro "([^"]*)" no campo de senha$/, (args1) => {
	cy.get('[data-qa="login-password"]').
});

When(/^clico no botão "([^"]*)"$/, (args1) => {
	cy.get('[data-qa="login-button"]').
});

Then(/^devo ser redirecionado para a página inicial$/, () => {
	return true;
});

Then(/^vejo uma mensagem de boas-vindas$/, () => {
	return true;
});
