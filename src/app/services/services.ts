import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  cards = [
    {
      title: 'Outpatient Consultation',
      text: 'Comprehensive Medical Care',
      content: 'At Diyaanvi Clinic, our outpatient consultations are designed to provide clear, accurate diagnoses and effective treatment plans. With a team of experienced specialists and general practitioners, we ensure every patient receives individualized attention in a supportive environment. Book your consultation today and take the first step toward better health.', img: './service-1.svg', bgColor: '#BBE5FF',
      alt: 'Outpatient consultation services at Diyaanvi Clinic, Bangalore'
    },
    { 
      title: 'Laboratory & Diagnostics', 
      text: 'Accurate Results. Trusted Methods.', 
      content: 'Our in-house laboratory is equipped with advanced diagnostic tools to support timely and precise evaluations. From routine blood tests to specialized diagnostics, all procedures are carried out by trained professionals following strict quality standards. We help you get the clarity you need to make informed decisions about your health.', 
      img: './service-2.svg', 
      bgColor: '#E4BBFF', 
      alt: 'Diagnostic and lab testing services at Diyaanvi Clinic, Uttarahalli' 
    },
    { title: 'ECG (Electrocardiogram)', 
      text: 'Quick, Painless Cardiac Testing', 
      content: 'Our ECG service offers a non-invasive, reliable method to assess your heart\'s electrical activity. Whether you\'re undergoing a routine heart check-up or need further cardiac evaluation, our trained staff ensures the procedure is smooth, efficient, and results are delivered with clarity.', 
      img: './service-3.svg', 
      bgColor: '#BBFFC1', 
      alt: 'Electrocardiogram (ECG) heart testing at Diyaanvi Clinic, Bangalore' 
    },
    { title: 'Nursing Care Services', 
      text: 'Supportive Care with a Personal Touch', 
      content: 'Our nursing team is committed to delivering compassionate, professional care that supports every patient’s recovery and comfort. Whether you need assistance during your visit or post-procedure care, our nursing staff is here to ensure your experience at Diyaanvi Clinic is safe, respectful and reassuring.', 
      img: './service-4.svg', 
      bgColor: '#FFD6BB', 
      alt: 'Compassionate nursing care services at Diyaanvi Clinic, Uttarahalli'
    }
  ];

  currentIndex = 0;
  intervalId: any;
  isMobile: boolean = false;

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {

    this.titleService.setTitle('Clinic Services | Skin, Diabetes & General Health Bangalore');
    this.metaService.updateTag({ name: 'description', content: 'Discover expert care for skin, diabetes & general health at Diyaanvi Clinic. Multi-speciality services in Uttarahalli, Bangalore.' });

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
  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }

  prevCard() {
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }
}
