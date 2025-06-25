
//import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

Given(/^que estou na página de login$/, () => {
	cy.visit('https://www.automationexercise.com/login')
});


