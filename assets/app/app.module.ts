import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponente } from "./header.component";
import { FooterComponente } from "./footer.component";
import { routing } from "./app.routing";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { LogoutComponent } from "./auth/logout.component";
import { AuthService } from "./auth/auth.service";
import { MenuComponent} from "./home/menu.component";
import { PerfilComponent } from "./home/perfil.component";
import { MatriculaComponent } from "./home/matricula.component";
import { FacturaComponent} from "./home/fatura.component";
import { SenhasComponent } from "./home/senhas.component";
import { InscricaoService } from "./home/inscricao.service"
import { RegisterAdminComponent } from "./auth/registeradmin.component";
import { ValidacaoMatriculaComponent } from "./admin/validacaoMatricula.component";
import { AdminPerfilComponent } from "./admin/adminperfil.component";
import { SenhasAdminComponent } from "./admin/senhasadmin.component";
import { MenuAdminComponent } from "./admin/menuadmin.component";
import { UnidadeService } from "./home/unidade.service";
import { SenhasDisplayComponent } from "./admin/senhas.component";
import { SenhasService } from "./admin/senha.service";
import { AdminService } from "./admin/admin.service";
import { UserService } from "./home/user.service";
import { AlteracaoPerfilesComponent } from "./admin/alteracaoPerfiles.component";
import { CadeiraService } from "./home/cadeira.service";
import { CadeirasComponent } from "./home/cadeiras.component";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponente,
        FooterComponente,
        SigninComponent,
        SignupComponent,
        LogoutComponent,
        MenuComponent,
        PerfilComponent,
        MatriculaComponent,
        SenhasComponent,
        FacturaComponent,
        RegisterAdminComponent,
        AdminPerfilComponent,
        MenuAdminComponent,
        ValidacaoMatriculaComponent,
        SenhasAdminComponent,
        SenhasDisplayComponent,
        AlteracaoPerfilesComponent,
        CadeirasComponent

    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule ],
    providers: [AuthService, InscricaoService, UnidadeService, SenhasService, AdminService, UserService, CadeiraService],
    bootstrap: [AppComponent ]
})
export class AppModule {

}
