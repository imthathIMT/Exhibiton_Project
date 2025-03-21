import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest, userDetails } from '../../../Services/Modal';
import { AuthService } from '../../../Services/auth.service';

import { jwtDecode } from 'jwt-decode';
import { AuthInterceptor } from '../../../interceptor/auth.interceptor';
import { NgxSpinnerService } from 'ngx-spinner';
import { WinningComponent } from '../../../Exhibition/winning/winning.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  login: LoginRequest;
  message: string = ''
  isModalVisible: boolean = false; // Flag to control modal visibility


  constructor(private router: Router, private loginService: AuthService, private spinner: NgxSpinnerService) {
    this.login = { nic: '', password: '' };
  }

  ngOnInit(): void {
  }


  showSpinner(name: string) {
    this.spinner.show(name);
  }

  hideSpinner(name: string) {
    this.spinner.hide(name);
  }

  onSubmit(): void {
    // Check if both NIC and password are provided
    if (this.login.nic && this.login.password) {
      // Show loading spinner
      this.showSpinner('sp2');

      // Call the login service method
      this.loginService.login(this.login).subscribe(
        (response: string) => {
          // Hide loading spinner on success
          this.hideSpinner('sp2');

          // Check if response is valid
          if (response) {
            try {
              // Store the token in localStorage
              localStorage.setItem('Token', response);

              // Decode the JWT token to get user details (including the Role)
              const userDetails: userDetails = jwtDecode(response);

              // Store user details in localStorage
              localStorage.setItem('Role', userDetails.Role);
              localStorage.setItem('NIC', userDetails.nic);

              // Navigate based on user role
              switch (userDetails.Role) {
                case 'Admin':
                  this.router.navigate(['/admin']);
                  break;
                case 'Student':
                  // Navigate to the WinningComponent
                  // this.router.navigate(['/winning']);
                  // this.router.navigate(['/student']);
                  this.isModalVisible = true; // Show the winning modal
                  break;
                case 'MasterAdmin':
                  this.router.navigate(['/admin']);
                  break;
                default:
                  // Handle unexpected role
                  console.error('Unrecognized role:', userDetails.Role);
                  alert('Role is unrecognized or missing.');
                  break;
              }
            } catch (err) {
              // Token decoding or storage error
              console.error('Error decoding the token:', err);
              this.message = 'There was an error decoding the token. Please try again later.';
              setTimeout(() => { this.message = ''; }, 4000);
            }
          } else {
            // Handle empty response
            console.error('Empty response received');
            this.message = 'Login failed, please try again.';
            setTimeout(() => { this.message = ''; }, 4000);
          }
        },
        (error) => {
          // Handle login service error (API errors)
          console.error('Login failed:', error);

          this.hideSpinner('sp2');

          // Check if the error has a message from the server
          if (error.error && error.error.message) {
            this.message = error.error.message; // Use server's error message
          } else if (error.status === 0) {
            this.message = 'Network error: Unable to reach the server. Please try again later.';
          } else {
            this.message = `Login failed: ${error.statusText || 'Unknown error'}`;
          }

          setTimeout(() => {
            this.message = '';
          }, 4000);
        }
      );
    } else {
      // Handle missing NIC or password
      console.log('Form is invalid');
      alert('Please enter both NIC and password.');
    }
  }

  // Method to close the modal
  closeWinning(event: Event): void {
    event.stopPropagation();
    this.isModalVisible = false;
  }

}

