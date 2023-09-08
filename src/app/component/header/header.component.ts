import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingapiService } from 'src/app/bookingapi.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieApiService } from 'src/app/movie-api.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit  {
  showFiller = false;
  value = 'Clear me';
  MovieArray:any
  sortArray:any
  img:any= "https://image.tmdb.org/t/p/original"
  constructor(private rout:Router, private getapi:MovieApiService,private bookingServi:BookingapiService){}
    
  ngOnInit(): void {
    this.getapi.getMovie().subscribe((res)=>{
      console.log(res);
      this.MovieArray=res
      console.log(this.MovieArray);

      this.sortArray=this.MovieArray.results.slice(12)
      console.log(this.sortArray);
      
      
    })
  }
  Log(){
    this.rout.navigate(['signup'])
  
  }
  sendData(id:any){
    this.bookingServi.ids=id
    this.rout.navigate(['details'])
  }
  Profile(){
    this.rout.navigate(['profile'])
  
  }


}




