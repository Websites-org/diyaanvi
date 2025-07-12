import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  menuOpen = false;
  showDoctorDropdown: boolean = false;


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
  closeDropDown() {
    this.showDoctorDropdown = false;
  }
  doctors = [
    {
      name: 'Dr. Bhavya N',
      title: 'Founder & Consultant Physician',
      image: './navbar-bhavya.png',
      link: '/doctor/dr-bhavya-n-general-physician-bangalore',
      alt: 'Dr. Bhavya - General Medicine doctor at Diyaanvi Clinic, Uttarahalli, Bangalore'
    },
    {
      name: 'Dr. Abhiram. R',
      title: 'Consultant Dermatologist and Dermatosurgeon',
      image: './navbar-abhiram.png',
      link: '/doctor/dr-abhiram-r-dermatologist-bangalore',
      alt: 'Dr. Abhiram - Dermatologist at Diyaanvi Clinic, Uttarahalli, Bangalore'
    }
  ];
  openDropdown(){
    this.showDoctorDropdown = !this.showDoctorDropdown
  }
  
}
