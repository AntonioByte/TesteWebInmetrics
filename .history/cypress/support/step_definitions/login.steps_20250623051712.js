import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^que estou na página de login$/, () => {
	cy.visit('https://www.automationexercise.com/login');
});

When(/^insiro "([^"]*)" no campo de email$/, (args1) => {
	cy.get('[data-qa="login-email"]').type(args1);
});

When(/^insiro "([^"]*)" no campo de senha$/, (args1) => {
	cy.get('[data-qa="login-password"]').type(args1);
});

When(/^clico no botão "([^"]*)"$/, (args1) => {
	cy.contains('button', args1).click();
});

Then(/^devo ser redirecionado para a página inicial$/, () => {
	cy.should('contain','Full-Fledged practice website for Automation Engineers')
});

Then(/^vejo uma mensagem de boas-vindas$/, () => {
	return true;
});
