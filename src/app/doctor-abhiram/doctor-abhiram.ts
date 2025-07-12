import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-doctor-abhiram',
  standalone: false,
  templateUrl: './doctor-abhiram.html',
  styleUrl: './doctor-abhiram.css'
})
export class DoctorAbhiram {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Dr. Abhiram | Dermatologist & Skin Specialist in Bangalore');
    this.metaService.updateTag({ name: 'description', content: 'Consult Dr. Abhiram, expert dermatologist for acne, pigmentation & skin care at Diyaanvi Clinic, Uttarahalli, Bangalore.' });
  }

  cards = [
    {
      message: 'Acne & Pigmentation Management',
      name: 'Drew White',
      role: 'Effective diagnosis and treatment for acne, dark spots and uneven skin tone through topical therapy, medications and advanced dermatological procedures.',
      avatar: './icon-1.png',
      bgColor: '#0077B6',
      alt : 'Acne and pigmentation treatment at Diyaanvi Clinic, Uttarahalli, Bangalore'
    },
    {
      message: 'Fungal & Allergic Skin Disorders',
      name: 'Brendan McDonald',
      role: 'Accurate evaluation and treatment of infections, rashes and allergic skin conditions using clinical-grade medication and preventive care advice.',
      avatar: './icon-2.png',
      bgColor: '#E29578',
      alt : 'Care for fungal and allergic skin conditions at Diyaanvi Clinic, Bangalore'
    },
    {
      message: 'Skin Biopsies & Mole Removal',
      name: 'Amber Stone',
      role: 'Safe, precise procedures for diagnostic skin biopsies and removal of benign or suspicious moles, performed with minimal discomfort.',
      avatar: './icon-3.png',
      bgColor: '#588157',
      alt : 'Skin biopsy and mole removal procedures at Diyaanvi Clinic, Uttarahalli, Bangalore'
    }
    ,
    {
      message: 'Aesthetic Dermatology & Scar Treatments',
      name: 'Amber Stone',
      role: 'Non-invasive and minimally invasive treatments to improve skin texture, reduce scarring and enhance your natural glow - personalized for your skin type and goals.',
      avatar: './icon-4.png',
      bgColor: '#735D78',
      alt : 'Aesthetic skin treatments and scar reduction at Diyaanvi Clinic, Bangalore'
    }
  ];
  //   expandedIndex: number | null = null;

  // toggleCard(index: number) {
  //   this.expandedIndex = this.expandedIndex === index ? null : index;
  // }
  expandedIndex: number | null = 0;


  expandCard(index: number): void {
    this.expandedIndex = index;
  }
}
