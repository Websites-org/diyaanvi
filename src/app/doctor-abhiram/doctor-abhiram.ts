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
//   expandedIndex: number | null = null;

// toggleCard(index: number) {
//   this.expandedIndex = this.expandedIndex === index ? null : index;
// }
expandedIndex: number | null = 0;

  // cards = [
  //   {
  //     title: 'Coastal Caves',
  //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.`,
  //     icon: 'fa-gem',
  //     background: 'url(http://dmmotionarts.com/wp-content/uploads/2024/01/anders-jilden-cYrMQA7a3Wc-unsplash.jpg)'
  //   },
  //   {
  //     title: 'Fungal & Allergic',
  //     description: `Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.`,
  //     icon: 'fa-heart',
  //     background: 'url(http://dmmotionarts.com/wp-content/uploads/2024/02/Footer-1.jpg)'
  //   },
  //   {
  //     title: 'Ocean Waves',
  //     description: `Pulvinar dapibus leo. Lorem ipsum dolor sit amet.`,
  //     icon: 'fa-water',
  //     background: 'url(http://dmmotionarts.com/wp-content/uploads/2024/03/nathan-dumlao-ciO5L8pin8A-unsplash-1.jpg)'
  //   },
  //   {
  //     title: 'Mountain Trails',
  //     description: `Dapibus leo. Lorem ipsum dolor sit amet.`,
  //     icon: 'fa-tree',
  //     background: 'url(http://dmmotionarts.com/wp-content/uploads/2024/01/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg)'
  //   }
  // ];

  expandCard(index: number): void {
    this.expandedIndex = index;
  }
}
