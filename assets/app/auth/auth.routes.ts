import {Routes} from "@angular/router";

import {SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {RegisterAdminComponent} from "./registeradmin.component";

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'registeradmin', component: RegisterAdminComponent}
    ];
