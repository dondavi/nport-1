import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../shared/services";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder,
              public authService: AuthService,
              public router: Router) {}
/*
  ngOnInit() {
    this.form = this.fb.group({
      username: [null,Validators.compose([Validators.required, Validators.minLength(5)])],
      password: [null, Validators.compose([Validators.required])]
    });
  }
*/
  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    /**
     * @method AuthService.authenticateCongnito calling the cognito authentication
     * @param {string} username
     * @param {string} password
     * @return {object} With accesstoken and payload
     */
    this.authService
      .authenticateCongnito({
        Username: this.form.value.username,
        Password: this.form.value.password
      })
      .subscribe(result => {
        // verify the result having the accessToken and payload information
        if (result && result.accessToken) {
          // After information is received send it to angular setters in services and can utlised
          this.authService.accessToken = result.accessToken.jwtToken;
          this.authService.userLoggedIn = true;
          this.authService.UserDetails = {
            username: result.accessToken.payload.username
          };
          // Route to home screen after success
          this.router.navigate(["dashboard"]);
        }

      });


  }
}
