import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingapiService {

  ids:any
  constructor(private http:HttpClient) { }
  getClickedMov(){
    return this.http.get(`https://api.themoviedb.org/3/movie/${this.ids}?api_key=e16daa5680c87214135153d1c51261ae`)
  }
}
