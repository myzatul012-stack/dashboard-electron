import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PouchdbAuthService } from '../../services/pouchdb-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private pouchdbAuth: PouchdbAuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) return;
    this.isLoading = true;
    this.errorMessage = '';

    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      error: async () => {
        const isValid = await this.pouchdbAuth.validate(username, password);
        if (isValid) {
          localStorage.setItem('token', 'local-user');
          this.isLoading = false;
          this.router.navigate(['/dashboard']);
        } else {
          this.isLoading = false;
          this.errorMessage = 'Invalid credentials. Please try again.';
        }
      }
    });
  }
}