# TesteWebInmetrics

## Pré-requisitos

- Node.js **18.x** ou superior
- npm (gerenciador de pacotes do Node)
- Google Chrome ou outro navegador compatível

## Instalação do Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/AntonioByte/TesteWebInmetrics.git
   cd TesteWebInmetrics
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

## Estrutura dos Testes

- Os arquivos `.feature` (cenários Gherkin) estão em:
  - `cypress/e2e/features/`
- Os arquivos de step definitions (implementação dos passos) estão em:
  - `cypress/support/step_definitions/`
- Comandos comuns estão em:
  - `cypress/support/step_definitions/comandos-comuns.steps.js`

## Como Executar os Testes

### 1. Abrir o Cypress em modo interativo (GUI):
```bash
npx cypress open
```
- Escolha o projeto E2E e selecione o arquivo `.feature` desejado para rodar o teste.

### 2. Executar os testes em modo headless (terminal):
```bash
npx cypress run
```
- Os resultados aparecerão no terminal e, se configurado, serão gerados vídeos e screenshots.

## Observações
- Os testes utilizam o plugin **@badeball/cypress-cucumber-preprocessor** para suporte ao Gherkin/Cucumber.
- Certifique-se de que as dependências estejam instaladas corretamente antes de rodar os testes.
- Caso encontre problemas de cache, execute:
  ```bash
  npx cypress cache clear
  ```

