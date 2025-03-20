Gerenciamento de Arquivos, Usuários e Organizações
Este projeto é uma API para gerenciamento de assistentes, arquivos, usuários e organizações. A API foi desenvolvida utilizando o framework Hono para rotas HTTP e Drizzle ORM para manipulação do banco de dados PostgreSQL. A aplicação oferece operações de CRUD (Create, Read, Update, Delete) para os dados, com suporte a paginação para consultas.

Tecnologias Utilizadas
Hono: Framework para desenvolvimento de APIs leves e rápidas.
Drizzle ORM: ORM para manipulação do banco de dados relacional PostgreSQL.
PostgreSQL: Banco de dados utilizado para armazenar as informações.
Supabase: Utilizado para autenticação de usuários.
TypeScript: Linguagem para desenvolvimento da API.
pnpm: Gerenciador de pacotes utilizado para gerenciamento de dependências.
Pré-requisitos
Node.js: Versão recomendada 18.x ou superior.
pnpm: Gerenciador de pacotes para instalar as dependências.
Estrutura do Projeto
perl
Copiar
my-app
├── README.md                                      # Documentação do projeto
├── src                                            # Código fonte da aplicação
│   ├── queries                                    # Consultas ao banco de dados
│   │   ├── assistants.ts                          # Consultas sobre assistentes
│   │   ├── db.ts                                  # Configuração do banco de dados
│   │   ├── files.ts                               # Consultas sobre arquivos
│   │   ├── organizations.ts                       # Consultas sobre organizações
│   │   └── users.ts                               # Consultas sobre usuários
│   ├── routes                                      # Definição das rotas da API
│   │   ├── assistants.ts                          # Rotas relacionadas a assistentes
│   │   ├── files.ts                               # Rotas relacionadas a arquivos
│   │   ├── organizations.ts                       # Rotas relacionadas a organizações
│   │   └── users.ts                               # Rotas relacionadas a usuários
│   ├── schemas                                     # Definições de schemas para tabelas
│   │   ├── assistants.ts                          # Schema da tabela assistentes
│   │   ├── files.ts                               # Schema da tabela arquivos
│   │   ├── organizations.ts                       # Schema da tabela organizações
│   │   └── users.ts                               # Schema da tabela usuários
│   └── index.ts                                   # Arquivo principal da aplicação
├── .gitignore                                     # Arquivos e pastas a serem ignorados pelo Git
├── package.json                                   # Definição das dependências do projeto
├── pnpm-lock.yaml                                 # Bloqueio de dependências do pnpm
├── README.md                                      # Este arquivo
├── tsconfig.json                                  # Configurações do TypeScript
└── wrangler.jsonc                                 # Configuração do Worker para implantação
Instalação e Configuração
1. Clonando o Repositório
Clone este repositório para o seu ambiente local:

bash
Copiar
git clone https://github.com/SEU_USUARIO/my-app.git
cd my-app
2. Instalando as Dependências
Este projeto utiliza o gerenciador de pacotes pnpm. Para instalar as dependências, execute o comando:

bash
Copiar
pnpm install
3. Configuração das Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:

env
Copiar
DATABASE_URL=URL_DO_BANCO_DE_DADOS
SUPABASE_URL=URL_DO_SUPABASE
SUPABASE_ANON_KEY=CHAVE_ANONIMA_DO_SUPABASE
Substitua os valores das variáveis de ambiente com as credenciais corretas.

4. Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute o comando:

bash
Copiar
pnpm run dev
A API estará disponível em http://localhost:4000.

5. Implantação
Para implantar a aplicação, utilize o comando:

bash
Copiar
pnpm run deploy
Isso irá implantar sua aplicação utilizando o Wrangler.

Endpoints da API
A API oferece os seguintes endpoints:

1. /api/assistants
GET: Retorna uma lista de assistentes com paginação.
2. /api/files
GET: Retorna uma lista de arquivos com paginação.
3. /api/organizations
GET: Retorna uma lista de organizações com paginação.
PATCH: Atualiza informações de uma organização específica, com base no external_id.
4. /api/users
GET: Retorna a lista de usuários cadastrados no Supabase.
