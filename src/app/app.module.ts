import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { SignupComponent } from './component/signup/signup.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';

// import {MatCardModule} from '@angular/material/card'; 
// import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { DetailsComponent } from './component/details/details.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { SeatInfoComponent } from './component/seat-info/seat-info.component';
import { ProfileComponent } from './component/profile/profile.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    DetailsComponent,
    SeatInfoComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatCardModule,
    // MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule ,
    MatSidenavModule,
    CarouselModule ,
    MatTabsModule 
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
