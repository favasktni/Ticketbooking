import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingapiService } from 'src/app/bookingapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  constructor(private bookingServi:BookingapiService,private rout:Router){}
  clickedMov:any

  img:any= "https://image.tmdb.org/t/p/original"
  
  ngOnInit(): void {
    this.bookingServi.getClickedMov().subscribe((res)=>{
      // console.log(res);
      this.clickedMov=res
      console.log(this.clickedMov);
    })
  
  }
  Locate(){
    this.rout.navigate(['seat-info'])
  }
}
