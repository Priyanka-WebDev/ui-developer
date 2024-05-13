import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'registration', component: RegistrationComponent },
  { path: 'showuser', component: ProfileComponent },
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
