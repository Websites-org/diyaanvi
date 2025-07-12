import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Services } from './services/services';
import { Home } from './home/home';
import { Doctor } from './doctor/doctor';
import { DoctorAbhiram } from './doctor-abhiram/doctor-abhiram';

const routes: Routes = [
  { path: '', component: Home },           // default route
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
  { path: 'doctor/dr-bhavya-n-general-physician-bangalore', component: Doctor },
  { path: 'doctor/dr-abhiram-r-dermatologist-bangalore', component: DoctorAbhiram },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
