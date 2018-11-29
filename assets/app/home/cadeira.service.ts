import { Injectable, OnDestroy } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operator/delay';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/Rx';

import { Cadeira } from "./cadeira.model";

const ALLCADEIRAS: Cadeira[] = [
    //Cadeira -> codigo, nome, sigla, ects, semestre, ano, Professor, Horario de Duvidas
    new Cadeira('001', 'Análise e Design de Sistemas de Informação', 'LEI', '6', '1','3',"Joaquim Desenhador",'2ª -> 10:30h-12:30h, SALA: 6.2.13 \n 5ª -> 14:30h-16:30h, SALA: 6.2.12'),
    new Cadeira('002', 'Computação Gráfica', 'LEI', '6', '1', '3','Blenderina Animadora','4ª -> 13:30h-15:30h, SALA: 1.2.3 \n 6ª -> 08:30h-10:30h, SALA: 1.3.3'),
    new Cadeira('003', 'Introdução à inteligencia Artificial', 'LEI', '6', '1', '3', 'Jarvis','2ª -> 10:30h-12:30h, SALA: 6.3.13 \n 5ª -> 14:30h-16:30h, SALA: 6.3.12'),
    new Cadeira('004', 'Sistemas Distribuidos', 'LEI', '6', '1', '3','Bit Coin','4ª -> 10:30h-12:30h, SALA: 6.3.13 \n 4ª -> 14:30h-16:30h, SALA: 6.3.12'),
    new Cadeira('005', 'Teoria da Computação', 'LEI', '6', '1', '3','Alberto Teorista','5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('006', 'Construção de Sistemas de Software', 'LEI', '6', '2', '3','Bob o Construtor','3ª -> 10:30h-12:30h, SALA: 3.3.13 \n 4ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('007', 'Engenharia do Conhecimento', 'LEI', '6', '2', '3','Joao Conhecido','5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('008', 'Projecto de Sistemas de Informação', 'LEI', '6', '2', '3','Projecionista Rex','5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('009', 'Segurança e Confiabilidade', 'LEI', '6', '2', '3','Teresa Seguradora','2ª -> 10:30h-12:30h, SALA: 3.3.13 \n 3ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('010', 'Física Experimental', 'LEI', '6', '1', '2','Alberto Umstein','4ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('011', 'Introdução à Investigação Operacional', 'LEI', '6', '1', '2','Joaquim Investigador','5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('012', 'Princípios de Programação', 'LEI', '6', '1', '2','Alberto Principionista','4ª -> 10:30h-12:30h, SALA: 3.3.13 \n 4ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('013', 'Redes de Computadores', 'LEI', '6', '1', '2','Ricardo Hackerino','5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('014', 'Sistemas de Informação e Bases de Dados', 'LEI', '6', '1', '2','Joaquina Bases','3ª -> 10:30h-12:30h, SALA: 3.3.13 \n 3ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('015', 'Desenvolvimento Centrado em Objetos', 'LEI', '6', '2', '2','Joao Desenvolvido','5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('016', 'Interfaces Pessoa-Máquina', 'LEI', '6', '2', '2','Andre Maquinista','3ª -> 10:30h-12:30h, SALA: 3.3.13 \n 4ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('017', 'Matemática Discreta', 'LEI', '6', '2', '2','Joana Discreta','5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('018', 'Pensamento Crítico', 'LEI', '6', '2', '2','Julia Critica','6ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('019', 'Sistemas Operativos', 'LEI', '6', '2', '2','Osmani Linau','3ª -> 10:30h-12:30h, SALA: 3.3.13 \n 3ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('020', 'Construção de Sistemas de Software', 'LTIC', '6', '1','3','Alberto Teorista','5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('021', 'Planeamento e Gestão de Projecto', 'LTIC', '6', '1','3','Joao Teorista','5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('022', 'Projecto de Tecnologias de Informação', 'LTIC', '6', '2','3','Coiso Teorista','5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
    new Cadeira('023', 'Projecto de Tecnologias de Redes', 'LTIC', '6', '2', '3','Timon Pumba','5ª -> 10:30h-12:30h, SALA: 3.3.13 \n 6ª -> 14:30h-16:30h, SALA: 3.3.12'),
];

const FETCH_LATENCY = 500;


@Injectable()
export class CadeiraService implements OnDestroy {

    constructor(private http: Http) { console.log('CadeiraService instance created.'); }
    ngOnDestroy() { console.log('CadeiraService instance destroyed.'); }

    public cadeiras: Cadeira[] = [];

    getCadeirasByCurso(value): Observable<Cadeira[]> {
        return delay.call(of(ALLCADEIRAS.filter(cadeira => cadeira.curso === value)), FETCH_LATENCY);
    }

    getUserCadeiras(cursoID){
        return this.http.get('http://localhost:3001/user/all_unidades')
            .map((response: Response) => {
                const allCadeiras = response.json().obj;
                console.log(response.json().message);
                console.log("todas as cadeiras",allCadeiras);
                let filteredCadeiras: Cadeira [] = [];

                for(let cadeira of allCadeiras){
                    if(cadeira.curso == cursoID){
                        let codigo = cadeira.codigo;
                        let nome = cadeira.nome;
                        let curso = cadeira.curso;
                        let ects = cadeira.ects;
                        let semestre = cadeira.semestre;
                        let ano = cadeira.ano;
                        let professor = cadeira.professor;
                        let duvidas = cadeira.duvidas;
                        filteredCadeiras.push(
                            new Cadeira(codigo, nome, curso, ects, semestre, ano, professor, duvidas)
                        );
                    }
                }
                this.cadeiras = filteredCadeiras;
                console.log("Founded Cadeiras do curso", filteredCadeiras);
                return filteredCadeiras;
            }).catch((error: Response) => Observable.throw(error.json()));
    }

    
}
