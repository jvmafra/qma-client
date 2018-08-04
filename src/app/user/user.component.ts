import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'app-register-form',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent {
    public user;
    public credentials;

    constructor(private userService: UserService,
                private alertService: AlertService) {
        this.user = {};
        this.credentials = {};
    }

    public registerUser() {
        console.log(this.user);
        this.userService.registerUser(this.user).subscribe(
            data => {
                this.alertService.showSuccessAlert('Cadastro', 'Usuario cadastrado com sucesso');
            }, err => {
                console.log(err.error.message);
                this.alertService.showErrorAlert('Cadastro invalido', err.error.message);
            }
          );
    }

    public loginUser() {
        console.log(this.credentials);
        this.userService.loginUser(this.credentials).subscribe(
            data => {
                this.alertService.showSuccessAlert('Login', 'Login realizado com sucesso com sucesso');
            }, err => {
                console.log(err.error.message);
                this.alertService.showErrorAlert('Login invalido', err.error.message);
            }
          );
    }
}
