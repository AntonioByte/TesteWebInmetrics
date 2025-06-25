# language: pt

Funcionalidade: Busca de Produtos

Como um usuário
Desejo buscar por produtos
Para encontrar itens de interesse

Cenário: Busca de produto por palavra-chave
  Dado que estou na página inicial
  Quando insiro "camiseta" no campo de busca
  E clico no botão "Buscar"
  Então devo ver uma lista de produtos que correspondem a "camiseta"
  E a mensagem "Nenhum resultado encontrado" não deve ser exibida 