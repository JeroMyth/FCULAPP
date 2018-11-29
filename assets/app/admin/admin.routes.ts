import {Routes} from "@angular/router";

import {AdminPerfilComponent} from "./adminperfil.component";
import {SenhasAdminComponent} from "./senhasadmin.component";
import {ValidacaoMatriculaComponent} from "./validacaoMatricula.component";
import { AlteracaoPerfilesComponent } from "./alteracaoPerfiles.component";

export const ADMIN_ROUTES: Routes = [
    { path: '', redirectTo: 'adminperfil', pathMatch: 'full' },
    { path: 'adminperfil', component: AdminPerfilComponent },
    { path: 'senhasadmin', component: SenhasAdminComponent},
    { path: 'validacaoMatricula', component: ValidacaoMatriculaComponent},
    { path: 'alterarcaoPerfil', component: AlteracaoPerfilesComponent }
    ];
