import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "../../shared/services";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public form: FormGroup;
  constructor(
      private fb: FormBuilder,
      public authService: AuthService,
      private router: Router) {}

  ngOnInit() {
    this.createLoginForm();
  }

  private createLoginForm(): void {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    this.authService
      .authenticateCongnito({
        Username: this.form.value.uname,
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
