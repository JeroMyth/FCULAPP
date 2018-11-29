import {Routes} from "@angular/router";

import {PerfilComponent} from "./perfil.component";
import {MatriculaComponent} from "./matricula.component";
import { FacturaComponent } from "./fatura.component";
import {SenhasComponent} from "./senhas.component";
import { CadeirasComponent } from "./cadeiras.component";

export const HOME_ROUTES: Routes = [
    { path: '', redirectTo: 'perfil', pathMatch: 'full' },
    { path: 'perfil', component: PerfilComponent },
    { path: 'matricula', component: MatriculaComponent },
    { path: 'fatura', component: FacturaComponent },
    { path: 'senhas', component: SenhasComponent },
    { path: 'unidadesInfo', component: CadeirasComponent }

    ];
