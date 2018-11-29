import { Component, OnInit } from "@angular/core";

import { AuthService } from "../auth/auth.service";
import { Admin } from "../auth/admin.model"

@Component({
    selector: 'app-adminperfil',
    templateUrl: './adminperfil.component.html'
})

export class AdminPerfilComponent implements OnInit{
    public admin: any = {}
    constructor(private authService: AuthService) { }

    ngOnInit(){
        this.admin = this.authService.getLoggedInAdmin();
        console.log('admin',this.admin);
    }

 }
