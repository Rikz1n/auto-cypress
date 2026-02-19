# Automação de testes E2E com Cypress na OrangeHRM 🍊

Este projeto contém a automação de testes E2E para a aplicação [OrangeHRM](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login), utilizando [Cypress](https://www.cypress.io/).

## Tecnologias e bibliotecas

* [Cypress](https://www.cypress.io/)
* [Node.js](https://nodejs.org/)
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Chance.js](https://chancejs.com/)

## Instalação

> Certifique-se de ter **Node.js** e **Git** instalado em sua máquina
1. Clone o repositório

2. Entre na pasta do projeto

3. Instale as dependências:
    ```Bash
    npm install
    ```

## Como rodar os testes

Cypress UI:
Abre a interface gráfica do Cypress para ver os testes rodando em tempo real.

```Bash
npx cypress open
```
Terminal:
Roda todos os testes em segundo plano e gera resultados no terminal.

```Bash
npx cypress run
```
Rodar uma spec específica
```Bash
npx cypress run --spec "cypress/e2e/login.spec.cy.js"
```

