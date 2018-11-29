import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import { AuthService } from "./auth.service";
import { Admin } from "./admin.model";


@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html'
})

export class RegisterAdminComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.myForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      email: new FormControl (null, Validators.required),
      password: new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    console.log("Form",this.myForm);
    const admin = new Admin(
      this.myForm.value.email,
      this.myForm.value.password,
      this.myForm.value.fullName
    );
  console.log(admin);
  this.authService.registeradmin(admin).subscribe(data=> console.log(data), error => console.log(error));
  this.myForm.reset();

}

}
