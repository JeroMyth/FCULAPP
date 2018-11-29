import {Component, OnInit} from "@angular/core"; 
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
 
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";
import { AdminService } from "./admin.service";
import { UserService } from "../home/user.service";

@Component({
	selector: 'app-altera_Perfil', 
	templateUrl: './alteracaoPerfiles.component.html' 
}) 

export class AlteracaoPerfilesComponent implements OnInit { 
    nameForm: FormGroup;
    emailForm: FormGroup; 
    numeroForm: FormGroup;
    nifForm: FormGroup;
    cursoForm: FormGroup;

    editName:boolean;
    editNumero: boolean;
    editCurso: boolean;
    editNif: boolean;

    public numberUsers: string[]=[];
    alunoId: String;
    public user: User;

    constructor(private authService: AuthService, private adminService: AdminService, private userService: UserService, private router: Router) 
    {
        console.log('AlteracaoPerfiles instance Page.');
        console.log('UserService instance created.');
        console.log('AuthService instance created.');
        console.log('AdminService instance created.');
     }

    ngOnInit() {
        this.nameForm = new FormGroup({
            name: new FormControl(null, Validators.required)
        })
        this.numeroForm = new FormGroup({
            numero: new FormControl(null, Validators.required)
        })
        this.nifForm = new FormGroup({
            nif: new FormControl(null, Validators.required)
        })
        this.cursoForm = new FormGroup({
            curso: new FormControl(null, Validators.required)
        })

        this.user = new User(" ", " ", " ", " ", " ", " ");

        this.adminService.getAlunos().subscribe(
            (alunos: User[]) => {
                let userAux: string[]=[];
                for (let aluno of alunos) {
                        userAux.push(aluno.userNumero);
                }
                console.log("Aluno Numbers", userAux);
                this.numberUsers = userAux;
            }, error => console.log(error));

        this.editName= false;
        this.editNumero= false;
        this.editCurso= false;
        this.editNif= false;    

    }

    onSubmit(value:string) {
        
        const user = this.user;
        if(value=='name'){
            console.log("Form", this.nameForm);
            user.fullName=this.nameForm.value.name;
            this.nameForm.reset();
        }
        else if(value=='numero'){
            console.log("Form", this.numeroForm);
            user.userNumero = this.numeroForm.value.numero;
            this.numeroForm.reset();
        }
        else if(value == 'nif'){
            console.log("Form", this.nifForm);
            user.userNif = this.nifForm.value.nif;
            this.nifForm.reset();
        }
        else if(value=='curso'){
            console.log("Form", this.cursoForm);
            user.userCurso = this.cursoForm.value.curso;
            this.cursoForm.reset();
        }
        console.log("new user",user);
        this.userService.updateUser(user).subscribe(data => console.log(data), error => console.log(error));
    }

    selectAluno(){
        console.log(this.alunoId);
        this.adminService.getAlunos().subscribe(
            (alunos: User[]) => {
                let userFound: User;
                for (let aluno of alunos) {
                    if(aluno.userNumero == this.alunoId){
                        userFound = aluno;
                    }
                }
                console.log(userFound);
                this.user=userFound;
                console.log("user selected", this.user);
            }, error => console.log(error));
        this.router.navigate(["/admin/alterarcaoPerfil?refresh=1"]);
    }

    editOnGoing(value:string){
        if (value == 'name') {
            this.editName=true;
        }
        else if (value == 'numero') {
            this.editNumero=true;
        }
        else if (value == 'nif') {
            this.editNif=true;
        }
        else if (value == 'curso') {
            this.editCurso=true;
        }
    }

    backEdit(value:string){
        if (value == 'name') {
            this.editName = false;
        }
        else if (value == 'numero') {
            this.editNumero = false;
        }
        else if (value == 'nif') {
            this.editNif = false;
        }
        else if (value == 'curso') {
            this.editCurso = false;
        }
        const user = this.user;
        this.router.navigate(["/admin/alterarcaoPerfil?refresh=2"]);
        this.ngOnInit();
        this.user= user;
    }

}