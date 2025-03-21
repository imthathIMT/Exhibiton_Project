import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-winning',
  templateUrl: './winning.component.html',
  styleUrl: './winning.component.css'
})
export class WinningComponent {

  isModalVisible: boolean = true;

  constructor(private router: Router) {}

  closeWinning(event: Event): void {
    // Stop propagation to prevent the modal content from being clicked
    event.stopPropagation();

    // Close the modal by setting the flag to false
    this.isModalVisible = false;

    // Navigate to the student page after a small delay to allow the fade effect
    setTimeout(() => {
      this.router.navigate(['/student']);
    }, 300);  // Adjust timeout if necessary
  }
}
