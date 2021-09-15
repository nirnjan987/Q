import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RegisterformComponent implements OnInit  {
  constuctor(){ }
  registerform:any;

  ngOnInit(): void {

    this.registerform = new formGroup({
    
    "employeName":new FormControl (null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    "employeAddress": new FormControl (null, [Validators.required, Validators.pattern ('[a-zA-Z ]*')]),
    "emailId": new FormControl (null, [Validators.required, Validators.email]),
    "phoneNumber":new FormControl (null, [Validators.required, Validators.pattern ('[0-9]*')])
    });

  }

  submitData()
  {
    console.log(this.registerform.value);
  }

get firstname() { return this.registerform.get('employeName'); }
get lastname() { return this.registerform.get('employeAddress'); } 
get emailid() {return this.registerform.get('emailld'); } 
get mobilenumber() { return this.registerform.get('phoneNumber'); }
}
