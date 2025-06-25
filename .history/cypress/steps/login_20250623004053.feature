# language: ing

Funcionalidade: Login no Sistema

  Como um usuário
  Desejo fazer login no sistema
  Para acessar minhas funcionalidades

  Cenário: Login bem-sucedido com credenciais válidas
    Given que estou na página de login
    When insiro "teste2021@teste.com.br" no campo de email
    And insiro "teste" no campo de senha
    And clico no botão "Login"
    Then devo ser redirecionado para a página inicial
    And vejo uma mensagem de boas-vindas