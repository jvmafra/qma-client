import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'app-register-form',
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    public user;
    public credentials;

    constructor(private userService: UserService,
                private alertService: AlertService) {
        this.user = {};
        this.credentials = {};
    }

    public registerUser() {
        console.log(this.user);
        console.log('Cliquei em registrar');
        this.userService.registerUser(this.user).subscribe(
            data => {
              console.log(data);
            }, err => {
                console.log(err.error.message);
                // this.alertService.showErrorAlert('Erro de cadastro', err.error.message);
            }
          );
    }

    public loginUser() {
        console.log(this.credentials);
        console.log('Cliquei em logar');
        this.userService.loginUser(this.credentials).subscribe(
            data => {
                console.log(data);
            }, err => {
                console.log(err.error.message);
                // this.alertService.showErrorAlert('Erro de cadastro', err.error.message);
            }
          );
    }
}
