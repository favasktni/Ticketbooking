import { Component } from '@angular/core';
import { BookingapiService } from 'src/app/bookingapi.service';
import { Seat } from 'src/assets/model/democlass';

declare var Razorpay:any

@Component({
  selector: 'app-seat-info',
  templateUrl: './seat-info.component.html',
  styleUrls: ['./seat-info.component.scss']
})
export class SeatInfoComponent {
 seatarray?:Seat[]
 img:any= "https://image.tmdb.org/t/p/original"
 clickedMov:any
 grandAmt=0
 ticketAmt=180
 showwindow=false

 btnclick(event: any){
  this.showwindow=true
  event.target.classList.toggle("book")

  if (event.target.classList.contains("book")) {
    this.grandAmt += this.ticketAmt
  }else{
    this.grandAmt -= this.ticketAmt
  }
 }
       PayNow(){
        const RazorpayOptions ={
          description:'Sample Rozorpay demo',
          currency:'INR',
          amount:this.grandAmt+"00",
          name:'paybill',
          key:'rzp_test_gd1NFWjbsd7Wz4',
          image:'https://www.samsung.com/global/galaxy/samsung-pay/images/00_samsung_pay_logo.svg',
          
          prefill:{
              name:'favas',
              email:'favas@gmail.com',
              phone:'1234567890'

          },
          theme:{
            color:'#f37254'
          },
          modal:{
            ondismiss:()=>{

            }
          }
        }
        const SuccessCalback =(paymentid:any)=>{
          console.log(paymentid);
          
        }
        const FailureCalback =(e:any)=>{
          console.log(e);
          
        }
        Razorpay.open(RazorpayOptions,SuccessCalback,FailureCalback)
      
 }




    public constructor  ( private BookApi:BookingapiService){ 
    this.seatarray=[
      { id : 1, seatNumber : 'A1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'A2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'A3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'A4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'A5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'A6', row :  'A', column : 6 , isBooked: false},
      { id : 7, seatNumber : 'A7', row :  'A', column : 7 , isBooked: false},
      { id : 8, seatNumber : 'A8', row :  'A', column : 8 , isBooked: false},
      { id : 9, seatNumber : 'A9', row :  'A', column : 9 , isBooked: false},
      { id : 10,seatNumber : 'A10', row : 'A', column : 10 , isBooked: false},

      { id : 1, seatNumber : 'B1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'B2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'B3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'B4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'B5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'B6', row :  'A', column : 6 , isBooked: false},
      { id : 7, seatNumber : 'B7', row :  'A', column : 7 , isBooked: false},
      { id : 8, seatNumber : 'B8', row :  'A', column : 8 , isBooked: false},
      { id : 9, seatNumber : 'B9', row :  'A', column : 9 , isBooked: false},
      { id : 10,seatNumber : 'B10', row : 'A', column : 10 , isBooked: false},

      { id : 1, seatNumber : 'C1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'C2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'C3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'C4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'C5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'C6', row :  'A', column : 6 , isBooked: false},
      { id : 7, seatNumber : 'C7', row :  'A', column : 7 , isBooked: false},
      { id : 8, seatNumber : 'C8', row :  'A', column : 8 , isBooked: false},
      { id : 9, seatNumber : 'C9', row :  'A', column : 9 , isBooked: false},
      { id : 10,seatNumber : 'C10', row : 'A', column : 10 , isBooked: false},

      { id : 1, seatNumber : 'D1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'D2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'D3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'D4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'D5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'D6', row :  'A', column : 6 , isBooked: false},
      { id : 7, seatNumber : 'D7', row :  'A', column : 7 , isBooked: false},
      { id : 8, seatNumber : 'D8', row :  'A', column : 8 , isBooked: false},
      { id : 9, seatNumber : 'D9', row :  'A', column : 9 , isBooked: false},
      { id : 10,seatNumber : 'D10', row : 'A', column : 10 , isBooked: false},

      { id : 1, seatNumber : 'E1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'E2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'E3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'E4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'E5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'E6', row :  'A', column : 6 , isBooked: false},
      { id : 7, seatNumber : 'E7', row :  'A', column : 7 , isBooked: false},
      { id : 8, seatNumber : 'E8', row :  'A', column : 8 , isBooked: false},
      { id : 9, seatNumber : 'E9', row :  'A', column : 9 , isBooked: false},
      { id : 10,seatNumber : 'E10', row : 'A', column : 10 , isBooked: false},

      { id : 1, seatNumber : 'F1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'F2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'F3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'F4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'F5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'F6', row :  'A', column : 6 , isBooked: false},
      { id : 7, seatNumber : 'F7', row :  'A', column : 7 , isBooked: false},
      { id : 8, seatNumber : 'F8', row :  'A', column : 8 , isBooked: false},
      { id : 9, seatNumber : 'F9', row :  'A', column : 9 , isBooked: false},
      { id : 10,seatNumber : 'F10', row : 'A', column : 10 , isBooked: false},

      { id : 1, seatNumber : 'G1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'G2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'G3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'G4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'G5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'G6', row :  'A', column : 6 , isBooked: false},
      { id : 7, seatNumber : 'G7', row :  'A', column : 7 , isBooked: false},
      { id : 8, seatNumber : 'G8', row :  'A', column : 8 , isBooked: false},
      { id : 9, seatNumber : 'G9', row :  'A', column : 9 , isBooked: false},
      { id : 10,seatNumber : 'G10', row : 'A', column : 10 , isBooked: false},

      { id : 1, seatNumber : 'H1', row :  'A', column : 1 , isBooked: false},
      { id : 2, seatNumber : 'H2', row :  'A', column : 2 , isBooked: false},
      { id : 3, seatNumber : 'H3', row :  'A', column : 3 , isBooked: false},
      { id : 4, seatNumber : 'H4', row :  'A', column : 4 , isBooked: false},
      { id : 5, seatNumber : 'H5', row :  'A', column : 5 , isBooked: false},
      { id : 6, seatNumber : 'H6', row :  'A', column : 6 , isBooked: false},
      { id : 7, seatNumber : 'H7', row :  'A', column : 7 , isBooked: false},
      { id : 8, seatNumber : 'H8', row :  'A', column : 8 , isBooked: false},
      { id : 9, seatNumber : 'H9', row :  'A', column : 9 , isBooked: false},
      { id : 10,seatNumber : 'H10', row : 'A', column : 10 , isBooked: false},



   
    ]
   }



   ngOnInit(): void {
    this.BookApi.getClickedMov().subscribe((res)=>{
      // console.log(res);
      this.clickedMov=res
      console.log(this.clickedMov);

      
    })

   
    
  }}
  
