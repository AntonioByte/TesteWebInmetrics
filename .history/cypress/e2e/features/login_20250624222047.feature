# language: pt

Funcionalidade: Login no Sistema

Como um usuário
Desejo fazer login no sistema
Para acessar minhas funcionalidades

Cenário: Login bem-sucedido com credenciais válidas
Dado que estou na página de login
Quando insiro "bacuse@teste.com.br" no campo de email
E insiro "teste" no campo de senha
E clico no botão "Login"
	cy.get('.active > :nth-child(1) > h2').should('contain','Full-Fledged practice website for Automation Engineers')
Então vejo uma mensagem de boas-vindas "Full-Fledged practice website for Automation Engineers"