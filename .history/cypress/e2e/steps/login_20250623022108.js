
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(/^que estou na página de login$/, () => {
	cy.visit('https://www.automationexercise.com/login');
});


When(/^insiro "([^"]*)" no campo de email$/, (args1) => {
	console.log(args1);
	return true;
});

And(/^insiro "([^"]*)" no campo de senha$/, (args1) => {
	console.log(args1);
	return true;
});

And(/^clico no botão "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^devo ser redirecionado para a página inicial$/, () => {
	return true;
});

And(/^vejo uma mensagem de boas-vindas$/, () => {
	return true;
});
