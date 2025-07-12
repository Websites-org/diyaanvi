import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  ngOnInit() {
    this.titleService.setTitle('Contact Diyaanvi Clinic | Book an Appointment in Uttarahalli, Bangalore');
    this.metaService.updateTag({ name: 'description', content: 'Reach out to Diyaanvi Clinic in Uttarahalli, Bangalore for expert skin, diabetes and general care. Book your visit today.' });
  }

  bookForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private titleService: Title, private metaService: Meta) {
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

  // onSubmit() {
  //   this.submitted = true;

  //   if (this.bookForm.invalid) return;

  //   console.log('Form Data:', this.bookForm.value);

  //   // Show success toast
  //   alert('Thank you! We will reach you shortly.');

  //   // Optionally reset the form
  //   this.bookForm.reset();
  //   this.submitted = false;
  // }
  onSubmit() {
    this.submitted = true;

    if (this.bookForm.invalid) return;

    const formData = this.bookForm.value;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    emailjs.send(
      'service_mmihjzg',      // Replace with your actual Service ID
      'template_5172r6h',     // Replace with your actual Template ID
      templateParams,
      'V8kegPap5_0uOD63r'       // Replace with your actual public key
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you! We will reach you shortly.');
        this.bookForm.reset();
        this.submitted = false;
      },
      (err) => {
        console.error('FAILED...', err);
        alert('Oops! Something went wrong. Please try again.');
      }
    );
  }

}
