import { Injectable, OnDestroy } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operator/delay';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/Rx';


import { Unidade } from "./unidade.model";
import { Matricula } from "./matricula.model";

const ALLUNIDADES: Unidade[] = [
    new Unidade('001', 'Análise e Design de Sistemas de Informação', 'LEI', '6', '1','3'),
    new Unidade('002', 'Computação Gráfica', 'LEI', '6', '1', '3'),
    new Unidade('003', 'Introdução à inteligencia Artificial', 'LEI', '6', '1', '3'),
    new Unidade('004', 'Sistemas Distribuidos', 'LEI', '6', '1', '3'),
    new Unidade('005', 'Teoria da Computação', 'LEI', '6', '1', '3'),
    new Unidade('006', 'Construção de Sistemas de Software', 'LEI', '6', '2', '3'),
    new Unidade('007', 'Engenharia do Conhecimento', 'LEI', '6', '2', '3'),
    new Unidade('008', 'Projecto de Sistemas de Informação', 'LEI', '6', '2', '3'),
    new Unidade('009', 'Segurança e Confiabilidade', 'LEI', '6', '2', '3'),
    new Unidade('010', 'Física Experimental', 'LEI', '6', '1', '2'),
    new Unidade('011', 'Introdução à Investigação Operacional', 'LEI', '6', '1', '2'),
    new Unidade('012', 'Princípios de Programação', 'LEI', '6', '1', '2'),
    new Unidade('013', 'Redes de Computadores', 'LEI', '6', '1', '2'),
    new Unidade('014', 'Sistemas de Informação e Bases de Dados', 'LEI', '6', '1', '2'),
    new Unidade('015', 'Desenvolvimento Centrado em Objetos', 'LEI', '6', '2', '2'),
    new Unidade('016', 'Interfaces Pessoa-Máquina', 'LEI', '6', '2', '2'),
    new Unidade('017', 'Matemática Discreta', 'LEI', '6', '2', '2'),
    new Unidade('018', 'Pensamento Crítico', 'LEI', '6', '2', '2'),
    new Unidade('019', 'Sistemas Operativos', 'LEI', '6', '2', '2'),
    new Unidade('020', 'Construção de Sistemas de Software', 'LTIC', '6', '1','3'),
    new Unidade('021', 'Planeamento e Gestão de Projecto', 'LTIC', '6', '1','3'),
    new Unidade('022', 'Projecto de Tecnologias de Informação', 'LTIC', '6', '2','3'),
    new Unidade('023', 'Projecto de Tecnologias de Redes', 'LTIC', '6', '2', '3')
];

const FETCH_LATENCY = 500;


@Injectable() 
export class UnidadeService implements OnDestroy {

    constructor(private http: Http) { console.log('UnidadeService instance created.'); }
    ngOnDestroy() { console.log('UnidadeService instance destroyed.'); }

    getUnidades(value): Observable<Unidade[]> {
        return delay.call(of(ALLUNIDADES.filter(unidade => unidade.curso === value)), FETCH_LATENCY);
    }

    getUnidadesByAno(curso,ano): Observable<Unidade[]> {
        return delay.call(of(ALLUNIDADES.filter(unidade => unidade.curso === curso && unidade.ano == ano )), FETCH_LATENCY);
    }

    getUnidadesViaCod(matricula: Matricula): Unidade[]{
        let unidadesCodigo = matricula.unidades;
        let unidades: Unidade[]= [];
        let index2=0;
        let found: boolean;
        found= false;
        for (let index1 = 0; index1 < unidadesCodigo.length; index1++) {
            while (!found && index2 < ALLUNIDADES.length){
                if (ALLUNIDADES[index2].codigo == unidadesCodigo[index1]) {
                    unidades[index1] = ALLUNIDADES[index2];
                    found=true;
                } 
                index2++;   
            }
            found=false;
            index2=0;
        }
        return unidades;
    }

    
}