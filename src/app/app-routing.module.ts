import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { HeaderComponent } from './component/header/header.component';
import { DetailsComponent } from './component/details/details.component';
import { SeatInfoComponent } from './component/seat-info/seat-info.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {path:"",
  redirectTo:"/signup",
  pathMatch:"full"
  
  },
  {path:'signup',component:SignupComponent},
  {path:'header',component:HeaderComponent},
  {path:'details',component:DetailsComponent},
  {path:'seat-info',component:SeatInfoComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
