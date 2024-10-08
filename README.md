# API-Focus - Backend

## Visão Geral
Este backend foi desenvolvido para fornecer uma API que gerencia o sistema de tarefas utilizando Firebase Firestore. Ele está estruturado utilizando:

-  **Node.js**
-  **Express**
-  **Cors**
-  **TypeScript**
-  **Firebase Firestore**
  
## Estrutura de Pastas
```
├── src
│   ├── routes
│   │   ├── taskRoutes.ts    # Rotas para operações CRUD com tarefas
│   ├── services
│   │   ├── taskService.ts   # Lida com lógica de CRUD via Firebase Firestore
│   │   ├── firebaseConnection.ts  # Conexão com Firebase
│   ├── server.ts            # Configuração do servidor Express
├── .env                     # Necessário para configurar as variáveis de ambiente
├── package.json              # Dependências do projeto
```

## Configuração Inicial

1. Instalar Dependências:
Certifique-se de instalar todas as dependências do projeto antes de iniciar:
```
npm install
```

2. Conexão com o Firebase:
Para conectar o projeto ao Firebase, crie um arquivo .env e adicione as credenciais do Firebase:
```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
```

3. Iniciar o Servidor:
Após configurar o ambiente, inicie o servidor com:
```
npm start
```

O servidor será iniciado na porta 3001.

## Rotas de Tarefas
As rotas relacionadas às tarefas foram configuradas separadamente em taskRoutes.ts. Elas seguem os padrões CRUD para gerenciar as tarefas dos usuários.
