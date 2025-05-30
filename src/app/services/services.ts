import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  cards = [
    { title: 'Outpatient Consultation', text: 'Comprehensive Medical Care', content: 'At Diyaanvi Clinic, our outpatient consultations are designed to provide clear, accurate diagnoses and effective treatment plans. With a team of experienced specialists and general practitioners, we ensure every patient receives individualized attention in a supportive environment. Book your consultation today and take the first step toward better health.' ,img:'./service-1.svg',bgColor:'#BBE5FF' },
    { title: 'Laboratory & Diagnostics', text: 'Accurate Results. Trusted Methods.', content: 'Our in-house laboratory is equipped with advanced diagnostic tools to support timely and precise evaluations. From routine blood tests to specialized diagnostics, all procedures are carried out by trained professionals following strict quality standards. We help you get the clarity you need to make informed decisions about your health.',img:'./service-1.svg', bgColor:'#E4BBFF' },
    { title: 'ECG (Electrocardiogram)', text: 'Quick, Painless Cardiac Testing', content: 'Our ECG service offers a non-invasive, reliable method to assess your heart\'s electrical activity. Whether you\'re undergoing a routine heart check-up or need further cardiac evaluation, our trained staff ensures the procedure is smooth, efficient, and results are delivered with clarity.',img:'./service-1.svg', bgColor:'#BBFFC1' },
    { title: 'Nursing Care Services', text: 'Supportive Care with a Personal Touch', content: 'Our nursing team is committed to delivering compassionate, professional care that supports every patient’s recovery and comfort. Whether you need assistance during your visit or post-procedure care, our nursing staff is here to ensure your experience at Diyaanvi Clinic is safe, respectful and reassuring.',img:'./service-1.svg',bgColor:'#FFD6BB' }
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
    }, 5000); // 5 seconds
  }

  pauseRotation() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  resumeRotation() {
    this.startRotation();
  }
}
