# language: pt

Funcionalidade: Validação de Produtos no Carrinho de Compras

Como um usuário
Desejo revisar os produtos no meu carrinho
Para confirmar minha compra antes de finalizar o pagamento

Cenário: Produtos corretos exibidos na tela de pagamento
  Dado que adicionei os produtos "Camiseta Básica" e "Calça Jeans" ao meu carrinho
  Quando navego para a tela de pagamento
  Então devo ver "Camiseta Básica" listada com o preço correto
  E devo ver "Calça Jeans" listada com o preço correto
  E o valor total deve ser a soma dos preços dos produtos no carrinho 