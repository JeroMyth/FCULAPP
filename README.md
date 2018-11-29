# FCULAPP
Web App About FCUL

Pré-Requesitos:
- Node.JS - [link to download NodeJs!](https://nodejs.org/en/download/)
- MongoDB Community Server - [link to download MongoDB community Server!](https://www.mongodb.com/download-center/community)
- Any Browser

## WARNING ##
Esta App foi desenvolvida e testada num ambiente de desenvolvimento Windows para ambientes baseados em Linux ou MacOS será necessario visitar os links referidos.

Neste projecto está a ser utilizado a API Angular2.

## Tutorial ##

### Setup do Node.JS:
Abrir terminal NODE.JS e navegar até ao directório root do projecto.

###### Instalar o npm e as dependencias que o projecto utiliza.

1. `>npm install`
2. `>npm install --save mongoose`
3. `>npm install -save mongoose-unique-validator`
4. `>npm install --save bcryptjs`
5. `>npm install --sava jsonwebtoken`
6. `>npm install moment --save`

### Setup do MongoDB Environment:

#### Em ambiente Windows

###### Criar a pasta de base de dados local para o MongoDB:

Abrir o Command Prompt e executar o comando abaixo.

`>md \data\db`


###### Arrancar o MongoDB:

Executar o seguinte comando num Command Prompt.

`>"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"`

Verificar que se o MongoDB iniciou correctamente analisando se o output no terminal acaba com:

`>[initandlisten] waiting for connections on port 27017`


###### Conectar-se ao MongoDB:

Executar o seguinte comando num Command Prompt

`>"C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"`


###### Em ambiente Linux e/ou MacOS visitar ## -> https://docs.mongodb.com/manual/administration/install-community/

### Troubleshooting do MongoDB:

###### Se ao arrancar o MongoDB e ocorrer o erro com codigo 100->

Navegar até à pasta \data\db e apagar o conteudo existente na pasta "db" ( o provavel é existir um bug nos ficheiros wireshark)


### Para arrancar a aplicação Web:

É necessario ter três terminais Node.js abertos e já navegados até ao root do projecto e correr os seguintes comandos na ordem pelo o qual os terminais estão nomiados (terminal 1, terminal 2 e terminal 3).

###### Node.Js terminal 1 (builder):

`>npm run build`

###### Node.JS Terminal 2 (starter):

`>npm start`

(ps. Verificar se houve conecção ao servidor MongoDB)

###### Node.Js terminal 3 (seeder):

`>node seed/senha-seeder.js`

`>node seed/unidades-seeder.js`

###### Output no browser
Após a aplicação ter sido construida(build) e ter sido arrancada(start) se a aplicação não iniciar automaticamente no seu browser navegue no seu brower para o seguinte endereço:

`>localhost:3001`


Create By João JeroMyth

