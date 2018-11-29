import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { AuthService } from "../auth/auth.service";
import { UserService } from "./user.service";
import { User } from "../auth/user.model"

@Component({
    selector: 'app-menu',
    templateUrl: './perfil.componente.html'
})

export class PerfilComponent implements OnInit{
    public user: any = {}
    @Output() editClicked = new EventEmitter<string>();

    constructor(private authService: AuthService) { }

    ngOnInit(){
        this.user = this.authService.getLoggedIn();
    }
    onEdit() {
        this.editClicked.emit('A new value');
    }

    //onSumit()

 }