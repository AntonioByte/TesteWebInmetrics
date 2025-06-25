# language: pt

Funcionalidade: Inclusão de Produtos no Carrinho

Como um usuário
Desejo adicionar produtos ao meu carrinho de compras
Para comprá-los posteriormente

Cenário: Adicionar um produto ao carrinho
  Dado que pesquiso pelo produto "Premium Polo T-Shirts"
  Quando clico no botão Adicionar ao Carrinho
  Então devo ver uma notificação de que o produto foi adicionado ao carrinho
 