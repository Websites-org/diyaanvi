import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-abhiram',
  standalone: false,
  templateUrl: './doctor-abhiram.html',
  styleUrl: './doctor-abhiram.css'
})
export class DoctorAbhiram {
  cards = [
    {
      message: 'Acne & Pigmentation Management',
      name: 'Drew White',
      role: 'Effective diagnosis and treatment for acne, dark spots and uneven skin tone through topical therapy, medications and advanced dermatological procedures.',
      avatar: './icon-1.png',
      bgColor:'#0077B6'
    },
    {
      message: 'Fungal & Allergic Skin Disorders',
      name: 'Brendan McDonald',
      role: 'Accurate evaluation and treatment of infections, rashes and allergic skin conditions using clinical-grade medication and preventive care advice.',
      avatar: './icon-2.png',
      bgColor:'#E29578'
    },
    {
      message: 'Skin Biopsies & Mole Removal',
      name: 'Amber Stone',
      role: 'Safe, precise procedures for diagnostic skin biopsies and removal of benign or suspicious moles, performed with minimal discomfort.',
      avatar: './icon-3.png',
      bgColor: '#588157'
    }
    ,
    {
      message: 'Aesthetic Dermatology & Scar Treatments',
      name: 'Amber Stone',
      role: 'Non-invasive and minimally invasive treatments to improve skin texture, reduce scarring and enhance your natural glow - personalized for your skin type and goals.',
      avatar: './icon-4.png',
      bgColor:'#735D78'
    }
  ];
  
}
