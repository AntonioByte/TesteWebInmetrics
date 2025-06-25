# language: pt

Funcionalidade: Busca de Produtos

Como um usuário
Desejo buscar por produtos
Para encontrar itens de interesse

Cenário: Busca de produto por palavra-chave
  Dado que estou na página de produtos
  Quando insiro "tshirt" no campo de busca
  E clico no botão de Busca
  Então devo ver uma lista de produtos que correspondem a "T-Shirt"
  E a mensagem "Nenhum resultado encontrado" não deve ser exibida 