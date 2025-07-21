
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-doctor',
  standalone: false,
  templateUrl: './doctor.html',
  styleUrl: './doctor.css',
})
export class Doctor {
  direction: 'next' | 'prev' = 'next';

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Dr. Bhavya - Diabetologist & General Physician | Bangalore');
    this.metaService.updateTag({ name: 'description', content: 'Experienced general physician & diabetologist in Uttarahalli, Bangalore. Consult Dr. Bhavya at Diyaanvi Clinic today.' });
  }

  cards = [
    {
      message: 'General Medicine',
      name: 'Drew White',
      role: 'Comprehensive diagnosis and treatment of common illnesses, infections, and systemic conditions with a focus on long-term health and early intervention.',
      avatar: './preventive-wellness-care-diayaanvi-clinic.png',
      bgColor: '#588157',
      alt: 'General Medicine services at Diyaanvi Clinic, Uttarahalli, Bangalore'
    },
    {
      message: 'Preventive Health Management',
      name: 'Brendan McDonald',
      role: 'Health screenings, routine check-ups, and risk assessments designed to detect conditions early and promote proactive wellness.',
      avatar: './general-medicine-services-diayaanvi-clinic.png',
      bgColor: '#0077B6',
      alt: "Preventive health check-ups and wellness care at Diyaanvi Clinic, Bangalore"
    },
    {
      message: 'Diabetology',
      name: 'Amber Stone',
      role: 'Expert management of diabetes and related complications through clinical evaluation, lifestyle counselling, and ongoing support.',
      avatar: './diabetes-care-diabetologist-diayaanvi-clinic.png',
      bgColor: '#735D78',
      alt: "Diabetes care and management by Diabetologist at Diyaanvi Clinic, Uttarahalli"
    }
    ,
    {
      message: 'Lifestyle- related Conditions',
      name: 'Amber Stone',
      role: 'Targeted care for conditions like obesity, hypertension, and thyroid disorders - rooted in personalized plans for sustainable health improvements.',
      avatar: './lifestyle-condition-treatment-bangalore.png',
      bgColor: '#E29578',
      alt: "Treatment for lifestyle-related conditions at Diyaanvi Clinic in Bangalore"
    }
  ];

  pointsImage: any = "./diabetes-reversal-treatment-diyaanvi-clinic-bangalore.png"
  specialityName : any = ['Diabetes', 'Diabetes Reversal', 'Thyroid-related illness', 'Blood-related disorders', 'Critical illness', 'Hypertension', 'Infectious Diseases']

  expandedIndex: number | null = 0;

  getImageName(imageName: string) {
    const imageMap: { [key: string]: string } = {
      "Diabetes Reversal": "./diabetes-reversal-treatment-diyaanvi-clinic-bangalore.png",
      "Diabetes": "./diabetes-care-at-diyaanvi-clinic-by-dr-divya-bangalore.png",
      "Thyroid-related illness": "./thyroid-treatment-diyaanvi-clinic-bangalore.png",
      "Blood-related disorders": "./blood-disorder-care-diyaanvi-clinic-bangalore.png",
      "Hypertension": "./hypertension-treatment-diyaanvi-clinic-bangalore.png",
      "Critical illness": "./critical-illness-management-diyaanvi-clinic-bangalore.png",
      "Infectious Diseases": "./infectious-disease-treatment-diyaanvi-clinic-bangalore.png"
    };

    this.pointsImage = imageMap[imageName] || "./diabetes-care-at-diyaanvi-clinic-by-dr-divya-bangalore.png";
  }

  expandCard(index: number): void {
    this.expandedIndex = index;
  }
}

