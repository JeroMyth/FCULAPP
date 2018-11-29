import {Routes, RouterModule} from "@angular/router";

import {AuthenticationComponent} from "./auth/authentication.component";
import {MenuComponent } from "./home/menu.component";
//admin
import{MenuAdminComponent} from "./admin/menuadmin.component";

import {AUTH_ROUTES} from "./auth/auth.routes";
import {HOME_ROUTES } from "./home/home.routes";

//admin
import {ADMIN_ROUTES} from "./admin/admin.routes";



const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
    { path: 'home', component: MenuComponent, children: HOME_ROUTES  },
    { path: 'admin', component: MenuAdminComponent, children: ADMIN_ROUTES}
    ];

export const routing = RouterModule.forRoot(APP_ROUTES);
