import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";

@Component({
    selector: 'app-header',
    template: `
            <header class="row">
                <nav class="col-md-8 col-md-offset-2">
                    <ul class="nav nav-pills">
                    <li>
                        <img src="https://ciencias.ulisboa.pt/sites/default/files/Ciencias_Logo_Azul-01.png" width="25%">
                    </li>
                    <li routerLinkActive="active">
                            <a [routerLink]="['auth']">Menu Principal</a>
                    </li>
                    <li routerLinkActive="active" *ngIf=" isLoggedIn()">
                            <a [routerLink]="['home']">Home</a>
                    </li>
                    <li routerLinkActive="active" *ngIf=" isLoggedInAdmin()">
                            <a [routerLink]="['admin']">Home</a>
                    </li>
                    <li *ngIf="isLoggedIn() || isLoggedInAdmin()">
                        <app-logout></app-logout>
                    </li>

                    </ul>
                    </nav>
            </header>`
    })

export class HeaderComponente{
    constructor(private authService: AuthService) { }

    isLoggedIn() {

        return this.authService.isLoggedIn();
    }

    isLoggedInAdmin(){

      return this.authService.isLoggedInAdmin();
    }
}
