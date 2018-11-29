//menu.component.ts

import { Component } from "@angular/core";

@Component({
    selector: 'app-menuadmin',
    template: `
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 col-md-4">
                <nav class="col-md-8 col-md-offset-1">
                    <ul class="nav nav-pills nav-stacked" role="tablist">
                        <li routerLinkActive="active">
                            <a [routerLink]="['adminperfil']">Perfil</a>
                        </li>
                        <li routerLinkActive="active">
                            <a [routerLink]="['senhasadmin']">Senhas</a>
                        </li>
                        <li routerLinkActive="active">
                            <a [routerLink]="['validacaoMatricula']"> Validacao da Matricula</a>
                        </li>
                        <li routerLinkActive="active">
                            <a [routerLink]="['alterarcaoPerfil']"> Modificar Perfil Aluno</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-10 col-md-8">
               <router-outlet></router-outlet>
            </div>
        </div>
    </div>
    `
})

export class MenuAdminComponent { }
