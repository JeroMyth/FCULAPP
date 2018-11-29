var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node-angular-fcul');
var Unidade = require('../models/unidade');

var unidades =[
         new Unidade({
             codigo: '001',
             nome: 'Análise e Design de Sistemas de Informação',
             curso: 'LEI',
             ects:'6',
             semestre: '1',
             ano: '3',
             professor: "Joaquim Desenhador",
             duvidas: '2ª -> 10:30h-12:30h, SALA: 6.2.13 \n 5ª -> 14:30h-16:30h, SALA: 6.2.12'
         }),
         new Unidade({
             codigo: '002',
             nome: 'Computação Gráfica',
             curso: 'LEI',
             ects:'6',
             semestre: '1',
             ano: '3',
             professor: 'Blenderina Animadora',
             duvidas: '4ª -> 13:30h-15:30h, SALA: 1.2.3 \n 6ª -> 08:30h-10:30h, SALA: 1.3.3'
         }),
         new Unidade({
             codigo: '003',
             nome: 'Introdução à inteligencia Artificial',
             curso: 'LEI',
             ects:'6',
             semestre: '1',
             ano: '3',
             professor: 'Jarvis',
             duvidas: '2ª -> 10:30h-12:30h, SALA: 6.3.13 \n 5ª -> 14:30h-16:30h, SALA: 6.3.12'
         }),
         new Unidade({
             codigo: '004',
             nome: 'Sistemas Distribuidos',
             curso: 'LEI',
             ects:'6',
             semestre: '1',
             ano: '3',
             professor: 'Bit Coin',
             duvidas: '4ª -> 10:30h-12:30h, SALA: 6.3.13 \n 4ª -> 14:30h-16:30h, SALA: 6.3.12'
         }),
         new Unidade({
             codigo: '005',
             nome: 'Teoria da Computação',
             curso: 'LEI',
             ects: '6',
             semestre: '1',
             ano: '3',
             professor: 'Alberto Teorista',
             duvidas: '5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '006',
             nome: 'Construção de Sistemas de Software',
             curso: 'LEI',
             ects:'6',
             semestre:  '2',
             ano:'3',
             professor:'Bob o Construtor',
             duvidas:'3ª -> 10:30h-12:30h, SALA: 3.3.13 \n 4ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '007',
             nome: 'Engenharia do Conhecimento',
             curso: 'LEI',
             ects:'6',
             semestre:  '2',
             ano:'3',
             professor:'Joao Conhecido',
             duvidas:'5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '008',
             nome: 'Projecto de Sistemas de Informação',
             curso: 'LEI',
             ects:'6',
             semestre:  '2',
             ano:'3',
             professor:'Projecionista Rex',
             duvidas:'5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '009',
             nome: 'Segurança e Confiabilidade',
             curso: 'LEI',
             ects:'6',
             semestre:  '2',
             ano:'3',
             professor:'Teresa Seguradora',
             duvidas:'2ª -> 10:30h-12:30h, SALA: 3.3.13 \n 3ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '010',
             nome: 'Física Experimental',
             curso: 'LEI',
             ects:'6',
             semestre:  '1',
             ano:'2',
             professor:'Alberto Umstein',
             duvidas:'4ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '011',
             nome: 'Introdução à Investigação Operacional',
             curso: 'LEI',
             ects: '6',
             semestre: '1',
             ano: '2',
             professor: 'Joaquim Investigador',
             duvidas: '5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '012',
             nome: 'Princípios de Programação',
             curso: 'LEI',
             ects:'6',
             semestre:  '1',
             ano:'2',
             professor:'Alberto Principionista',
             duvidas:'4ª -> 10:30h-12:30h, SALA: 3.3.13 \n 4ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '013',
             nome: 'Redes de Computadores',
             curso: 'LEI',
             ects:'6',
             semestre:  '1',
             ano:'2',
             professor:'Ricardo Hackerino',
             duvidas:'5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '014',
             nome: 'Sistemas de Informação e Bases de Dados',
             curso: 'LEI',
             ects: '6',
             semestre: '1',
             ano: '2',
             professor: 'Joaquina Bases',
             duvidas: '3ª -> 10:30h-12:30h, SALA: 3.3.13 \n 3ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '015',
             nome: 'Desenvolvimento Centrado em Objetos',
             curso: 'LEI',
             ects:'6',
             semestre:  '2',
             ano:'2',
             professor:'Joao Desenvolvido',
             duvidas:'5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '016',
             nome: 'Interfaces Pessoa-Máquina',
             curso: 'LEI',
             ects:'6',
             semestre:  '2',
             ano:'2',
             professor:'Andre Maquinista',
             duvidas:'3ª -> 10:30h-12:30h, SALA: 3.3.13 \n 4ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '017',
             nome: 'Matemática Discreta',
             curso: 'LEI',
             ects:'6',
             semestre:  '2',
             ano:'2',
             professor:'Joana Discreta',
             duvidas:'5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '018',
             nome: 'Pensamento Crítico',
             curso: 'LEI',
             ects:'6',
             semestre:  '2',
             ano:'2',
             professor:'Julia Critica',
             duvidas:'6ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '019',
             nome: 'Sistemas Operativos',
             curso: 'LEI',
             ects:'6',
             semestre:  '2',
             ano:'2',
             professor:'Osmani Linau',
             duvidas:'3ª -> 10:30h-12:30h, SALA: 3.3.13 \n 3ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '020',
             nome: 'Construção de Sistemas de Software',
             curso: 'LTIC',
             ects:'6',
             semestre:  '1',
             ano:'3',
             professor:'Alberto Teorista',
             duvidas:'5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '021',
             nome: 'Planeamento e Gestão de Projecto',
             curso: 'LTIC',
             ects:'6',
             semestre:  '1',
             ano:'3',
             professor:'Joao Teorista',
             duvidas:'5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '022',
             nome: 'Projecto de Tecnologias de Informação',
             curso: 'LTIC',
             ects:'6',
             semestre:  '2',
             ano:'3',
             professor:'Coiso Teorista',
             duvidas:'5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
         }),
         new Unidade({
             codigo: '023', 
             nome: 'Projecto de Tecnologias de Redes', 
             curso: 'LTIC', 
             ects:'6', 
             semestre: '2', 
             ano:'3', 
             professor:'Timon Pumba', 
             duvidas:'5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'
            }) 

]

var done = 0
for(var i = 0 ; i < unidades.length ; i++){
    unidades[i].save(function(err, result){
        done++;
        if (err) {
                console.log( 'An error occurred');
                return;
        }
        if(done === unidades.length){
            exit();
            console.log("NO ERROR PASSED")
        }
    });
}

function exit(){
    mongoose.disconnect();
}