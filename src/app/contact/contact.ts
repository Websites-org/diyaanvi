import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  bookForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]
      ],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.bookForm.invalid) return;

    console.log('Form Data:', this.bookForm.value);

    // Show success toast
    alert('Thank you! We will reach you shortly.');

    // Optionally reset the form
    this.bookForm.reset();
    this.submitted = false;
  }
}
