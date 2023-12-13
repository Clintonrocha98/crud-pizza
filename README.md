# Desafio - Pizzaria Backend

## Descrição do Projeto

O projeto "Pizzaria" tem como objetivo fornecer uma API JSON para ser consumida por um cliente frontend para realizar pedidos de pizza. O sistema possui as seguintes entidades, incluindo relações apropriadas:

- **Pizza**: Possui um nome e preço (por exemplo, Margherita $5, Pepperoni $6, ...).
- **Pedido (Order)**: Possui itens.
- **Item de Pedido (Order Item)**: Possui uma pizza e quantidade.

Os seguintes endpoints devem retornar uma resposta em formato JSON:

- `/api/orders` (lista de pedidos)
- `/api/orders/:id` (detalhes de um pedido individual)
- `/api/pizzas` 

## Configuração do Backend

### Tecnologias Utilizadas

O backend do projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Prisma ORM**: Framework para interação com o banco de dados.
- **Express**: Framework para desenvolvimento de aplicativos web com Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.

### Estrutura do Projeto

O projeto está estruturado em três partes principais: rotas (routes), serviços (services), e repositório (repository).

- **Rotas (`routes.ts`)**: Define as rotas da aplicação utilizando o Express.
- **Repositório (`OrdersRepository.ts`)**: Implementa as operações de acesso ao banco de dados utilizando o Prisma ORM.
- **Serviço (`OrdersService.ts`)**: Contém a lógica de negócios relacionada aos pedidos.
- **Controlador (`OrdersController.ts`)**: Conecta as rotas com os serviços.

### Arquivo de Configuração do Banco de Dados

O arquivo de configuração do banco de dados é gerenciado pelo Prisma. Certifique-se de que as configurações do banco de dados estão corretas para garantir uma conexão bem-sucedida.
## Endpoints da API

### 1. Listar Pizzas

Endpoint: `GET /api/pizzas`

Retorna a lista de pizzas disponíveis em formato JSON.

### 2. Criar Novo Pedido

Endpoint: `POST /api/newOrder`

Cria um novo pedido com base nos dados fornecidos no corpo da requisição.

#### Parâmetros da Requisição

```json
{ "name": "Pizza tal", "price": 15, "quantity": 2 }
```

### 3. Listar Todos os Pedidos

Endpoint: `GET /api/orders`

Retorna a lista de todos os pedidos em formato JSON.

### 4. Detalhes de um Pedido Individual

Endpoint: `GET /api/order/:id`

Retorna os detalhes de um pedido específico com base no ID fornecido.

#### Parâmetros da Requisição

- `id`: Identificador único do pedido.

## Como Iniciar o Servidor

Para iniciar o servidor, execute o seguinte comando no terminal:

``` bash
npm install # Instalar as dependências
npm run dev # Iniciar o servidor
```

Certifique-se de ter as configurações do banco de dados corretamente definidas antes de iniciar o servidor.


# Desafio - Pizzaria Front

## Descrição do Projeto

O frontend deste projeto foi desenvolvido utilizando React e CSS para criar uma aplicação web que permite aos usuários realizar pedidos de pizza. A aplicação interage com a API construída na parte do backend do desafio.

## Estrutura do Projeto

A estrutura do projeto é baseada em componentes React, que são gerenciados pelo arquivo `App.tsx`. Além disso, foi utilizado o arquivo de estilo `App.css` para estilizar a aplicação.

## Componentes e Funcionalidades

### 1. **`App.tsx`**

O arquivo `App.tsx` contém o componente principal da aplicação. Aqui estão as principais funcionalidades:

- **Estado (State):**
    
    - `pizzas`: Armazena a lista de pizzas obtida do backend.
    - `ordersApi`: Armazena a lista de pedidos obtida do backend.
    - `orders`: Armazena os detalhes do pedido em andamento.
    - `refreshApi`: Controla a atualização da lista de pedidos ao confirmar um novo pedido.
- **Métodos:**
    
    - `useEffect`: Utilizado para carregar as pizzas e os pedidos ao iniciar a aplicação.
    - `handleOrder`: Envia um novo pedido para o backend e atualiza a lista de pedidos.
    - `handleQuantityChange`: Atualiza a quantidade no estado conforme o usuário digita.
    - `handleConfirm`: Atualiza os detalhes do pedido (nome, preço) ao confirmar a escolha de uma pizza.
- **Renderização:**
    
    - Exibe a lista de pizzas disponíveis.
    - Permite ao usuário selecionar a quantidade desejada.
    - Permite ao usuário confirmar o pedido.
    - Exibe a lista de pedidos realizados.

### 2. **`App.css`**

O arquivo `App.css` contém as regras de estilo para a aplicação. Ele é importado no arquivo `App.tsx` para aplicar estilos aos elementos da interface.

## Configuração e Uso

```bash
npm install # Instalar as dependências
npm run dev # Iniciar o servidor
```

## Considerações Finais

Este é um guia básico para entender a estrutura e funcionamento do frontend. Personalize conforme necessário para atender aos requisitos específicos do projeto. Certifique-se de ajustar o estilo, adicionar validações e realizar testes abrangentes para garantir uma experiência do usuário consistente.