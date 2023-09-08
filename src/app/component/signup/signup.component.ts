import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor (private Fb:FormBuilder, private router:Router){}
  submit= false;
  regiestrationForm =this.Fb.group({
    firstName:['', Validators.required],
    lastName:['',Validators.required],
    phone:['',Validators.required],
    email:['',Validators.required]
      
  })
 
  get f(){
    return this.regiestrationForm.controls
  } 
  onsubmit(){
    this.submit=true
    }

    Login(){
      this.router.navigate(['header'])
    }
}
