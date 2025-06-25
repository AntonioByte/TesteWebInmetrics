import { Dado, Quando, Entao } from "cypress-cucumber-preprocessor/steps";

Dado(/^que estou na página de login$/, () => {
	cy.visit('https://www.automationexercise.com/login')
});

Quando(/^insiro "([^"]*)" no campo de email$/, (args1) => {
	console.log(args1);
	return true;
});

Quando(/^insiro "([^"]*)" no campo de senha$/, (args1) => {
	console.log(args1);
	return true;
});

Quando(/^clico no botão "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Entao(/^devo ser redirecionado para a página inicial$/, () => {
	return true;
});

Entao(/^vejo uma mensagem de boas-vindas$/, () => {
	return true;
});
