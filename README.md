# Gerenciamento de Arquivos, Usuários e Organizações

## Tecnologias Utilizadas
- **Hono**: Framework para desenvolvimento de APIs.
- **Drizzle ORM**: ORM para manipulação do banco de dados relacional PostgreSQL.
- **PostgreSQL**: Banco de dados utilizado para armazenar as informações.
- **Supabase**: Utilizado para autenticação de usuários.
- **TypeScript**: Linguagem para desenvolvimento da API.
- **pnpm**: Gerenciador de pacotes utilizado para gerenciamento de dependências.

## Pré-requisitos
- **Node.js**: Versão recomendada 18.x ou superior.
- **pnpm**: Gerenciador de pacotes para instalar as dependências.

## Clone o repositório para seu ambiente local:
- git clone https://github.com/mrodriguesoliv/argos-backend.git
- cd argos-backend

## Instale as dependências:
- pnpm install

## Configure as variáveis de ambiente:
- **DATABASE_URL**=URL_DO_BANCO_DE_DADOS
- **SUPABASE_URL**=URL_DO_SUPABASE
- **SUPABASE_ANON_KEY**=CHAVE_ANONIMA_DO_SUPABASE

## Executando o backend:
- pnpm run dev

## Endpoints da API:
**1. /api/assistants**
GET: Retorna uma lista de assistentes com paginação.

**2. /api/files**
GET: Retorna uma lista de arquivos com paginação.

**3. /api/organizations**
GET: Retorna uma lista de organizações com paginação.
PATCH: Atualiza informações de uma organização específica, com base no external_id

**4. /api/users**
GET: Retorna a lista de usuários cadastrados no Supabase.
