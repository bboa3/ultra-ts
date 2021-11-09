## Ultra Teste - Node js 
Este repositório representa o teste de Node Js concluído por Arlindo Boa (https://github.com/bboa3/).

## Desafios concluídos: 

#### Salvar utilizadores randômicos
```bash
  [x] Consumir dados da API (https://randomuser.me/)
  [x] Limitar o salvamento de utilizadores randômicos para máximos de 50
```

#### 3 endpoints GET, DELETE e PUT
```bash
  [x] Busca um determinado User com base no seu nome
  [x] Remover um User dado o seu email
  [x] Actualizar os dados de um User
```

## Como Testar? 
 - Fork do repositório.
 - Criar arquivo .env, o arquivo .env.example tem todas as variáveis necessárias. Nota: A variável `PG_USERNAME` deve ser preenchida por um usuário postgres com permissão para criar banco de dados se quiser que base de dados seja criada automaticamente. 

### Migrations
```bash
npm run migration:save
# or
yarn migration:save
```
### Start
```bash
npm run dev
# or
yarn dev
```
