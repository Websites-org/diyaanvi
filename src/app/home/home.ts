import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  cards = [
    { title: 'Outpatient Consultation', text: 'Comprehensive Medical Care', content: 'At Diyaanvi Clinic, our outpatient consultations are designed to provide clear, accurate diagnoses and effective treatment plans. With a team of experienced specialists and general practitioners, we ensure every patient receives individualized attention in a supportive environment. Book your consultation today and take the first step toward better health.' ,img:'./service-1.svg',bgColor:'#BBE5FF' },
    { title: 'Laboratory & Diagnostics', text: 'Accurate Results. Trusted Methods.', content: 'Our in-house laboratory is equipped with advanced diagnostic tools to support timely and precise evaluations. From routine blood tests to specialized diagnostics, all procedures are carried out by trained professionals following strict quality standards. We help you get the clarity you need to make informed decisions about your health.',img:'./service-2.svg', bgColor:'#E4BBFF' },
    { title: 'ECG (Electrocardiogram)', text: 'Quick, Painless Cardiac Testing', content: 'Our ECG service offers a non-invasive, reliable method to assess your heart\'s electrical activity. Whether you\'re undergoing a routine heart check-up or need further cardiac evaluation, our trained staff ensures the procedure is smooth, efficient, and results are delivered with clarity.',img:'./service-3.svg', bgColor:'#BBFFC1' },
    { title: 'Nursing Care Services', text: 'Supportive Care with a Personal Touch', content: 'Our nursing team is committed to delivering compassionate, professional care that supports every patient’s recovery and comfort. Whether you need assistance during your visit or post-procedure care, our nursing staff is here to ensure your experience at Diyaanvi Clinic is safe, respectful and reassuring.',img:'./service-4.svg',bgColor:'#FFD6BB' }
  ];

  currentIndex = 0;
  intervalId: any;
  isMobile:boolean = false;

  ngOnInit() {
    const isMobile = window.innerWidth <= 768;
    console.log(isMobile)
    this.isMobile = isMobile;
    this.startRotation();
    
  }

  ngOnDestroy() {
    this.pauseRotation();
  }

  startRotation() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    }, 15000); // 5 seconds
  }
  scrollToAbout(): void {
    this.viewportScroller.scrollToAnchor('about');
  }
  pauseRotation() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  resumeRotation() {
    this.startRotation();
  }

  bookForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private viewportScroller: ViewportScroller) {
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
  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }
  
  prevCard() {
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }
}
