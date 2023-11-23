import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { GoogleAuthProvider } from "@angular/fire/auth"
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private fireAuth: AngularFireAuth, private router: Router, private spinner: NgxSpinnerService) {

    }
    signInWithGoogle() {
        this.spinner.show();
        return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(() => {
            this.router.navigate(['/strength-builder/main']);
            this.spinner.hide();
        }, err => {
            console.log(err)
        })
    }

    signOut() {
        return this.fireAuth.signOut().then(() => {
            this.router.navigate(['/strength-builder/home']);
            this.spinner.hide();
        }, err => {
            console.log(err)
        })
    }
}