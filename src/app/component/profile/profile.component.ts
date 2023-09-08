import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  image:any
  public constructor (){}

  click(){
     this.image
     console.log(this.image);
     
  }
}
