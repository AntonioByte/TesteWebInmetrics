# language: pt

Funcionalidade: Validação de Produtos no Carrinho de Compras

Como um usuário
Desejo revisar os produtos no meu carrinho
Para confirmar minha compra antes de finalizar o pagamento

Cenário: Produtos corretos exibidos na tela de pagamento
  Dado que estou na página de login
  E insiro "bacuse@teste.com.br" no campo de email
  E insiro "teste" no campo de senha
  E clico no botão "Login"
  E adicionei o produto "Premium Polo T-Shirts" ao meu carrinho
  E adicionei o produto "Soft Stretch Jeans" ao meu carrinho
  Quando navego para a tela de pagamento
  Então devo ver o produto "Premium Polo T-Shirts" listado com o preço correto
  E devo ver o produto "Soft Stretch Jeans" listado com o preço correto
  