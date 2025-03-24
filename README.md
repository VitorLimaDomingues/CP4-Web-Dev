# Projeto React - Navegação com React Router

Este é um projeto React que implementa navegação entre diferentes páginas utilizando o `react-router-dom`. O projeto inclui uma barra de navegação, rodapé e diferentes rotas para acessar páginas específicas.

## Tecnologias Utilizadas

- React
- React Router DOM
- JavaScript (ES6+)
- HTML & CSS (para estilização)

## Estrutura do Projeto

```
/src
 |-- /components
 |    |-- Nav.js (Barra de navegação)
 |    |-- Footer.js (Rodapé)
 |
 |-- /routes
 |    |-- Home.js (Página Inicial)
 |    |-- Sobre.js (Página "Sobre")
 |    |-- PaginaProdutos.js (Página de Produtos)
 |    |-- Error.js (Página de Erro 404)
 |
 |-- App.js (Componente principal)
 |-- index.js (Ponto de entrada do aplicativo)
```

## Instalação e Execução

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```sh
   npm start
   ```

## Como Funciona

- `/` - Página inicial.
- `/produto` - Exibe a página de produtos.
- `/sobre` - Exibe a página "Sobre".
- Qualquer outra rota levará à página de erro (`Error.js`).

## Deploy na vercel
- https://cp-4-web-dev-delta.vercel.app/

## Autores
- Vitor de Lima Domingues(RM:561008)
- João Pedro Vieira de Morais(RM:560527)
- Giovanni Romano Provazi(RM:560434)