# FCULAPP
Web App About FCUL

Pré-Requesitos:
-> Node.JS - https://nodejs.org/en/download/
-> MongoDB Community Server - https://www.mongodb.com/download-center/community
-> Any Browser

## WARNING ##
Esta App foi desenvolvida e testada num ambiente de desenvolvimento Windows para ambientes baseados em Linux ou MacOS se necessario vistitar os links referidos.

Neste projecto está a ser utilizado a API Angular2.

## Tutorial ##

SETUP DO NODE.JS:
Abrir terminal NODE.JS e navegar até ao directório root do projecto
Instalar o npm e as dependencias que o projecto utiliza.
>npm install
>npm install --save mongoose
>npm install -save mongoose-unique-validator
>npm install --save bcryptjs
>npm install --sava jsonwebtoken
>npm install moment --save

SETUP DO MongoDB ENVIRONMENT:

Em ambiente Windows->
Abrir o Command Prompt e criar a pasta de base de dados local para o MongoDB
>md \data\db

Arrancar o MongoDB:
Executar o seguinte comando num Command Prompt
> "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"

Verificar que se o MongoDB iniciou correctamente analisando se o output no terminal acaba com:
[initandlisten] waiting for connections on port 27017

Conectar-se ao MongoDB:
Executar o seguinte comando num Command Prompt
>"C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"


## Em ambiente Linux e/ou MacOS visitar ## -> https://docs.mongodb.com/manual/administration/install-community/

TROUBLESHOOTING DO MongoDB:
Se ao arrancar o MongoDB e ocorrer o erro com codigo 100->
Navegar até à pasta \data\db e apagar o conteudo existente na pasta "db" ( o provavel é existir um bug nos ficheiros wireshark)


PARA ARRANCAR A APLICAÇÃO WEB:
É necessario ter três terminais Node.js abertos e já navegados até ao root do projecto e correr os seguintes comandos na ordem pelo o qual os terminais estão nomiados (terminal 1, terminal 2 e terminal 3) 

Node.Js terminal 1:
>npm run build

Node.JS Terminal 2:
>npm start
(ps. Verificar se houve conecção ao servidor MongoDB)

Node.Js terminal 3:
>node seed/senha-seeder.js
>node seed/unidades-seeder.js


Após a aplicação ter sido construida(build) e ter sido arrancada(start) se a aplicação não iniciar automaticamente no seu browser navegue no seu brower para o seguinte endereço,
> localhost:3001


Create By João Manuel Jeromito

