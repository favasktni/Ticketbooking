import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
import { BookingapiService } from './bookingapi.service';
@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
   
  constructor( private api:HttpClient) { }
  MovieArray :any[]=[]
  getMovie(){
    return this.api.get<any>('https://api.themoviedb.org/3/movie/upcoming?api_key=e16daa5680c87214135153d1c51261ae')
    .pipe(map((res)=>{
      return res
    }))
  }
  
}
