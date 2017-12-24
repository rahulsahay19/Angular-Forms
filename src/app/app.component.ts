import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  signUpForm:FormGroup;
  checkUserName() {
    const availableName = 'admin';
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'firstname': new FormControl('Rahul', Validators.required),
      'lastname': new FormControl('Sahay', Validators.required),
      'designation': new FormControl('Developer', Validators.required),
      'email': new FormControl('rahul@sahay.com',[Validators.required,Validators.email]),
      'username': new FormControl('admin',Validators.required),
    });
   }

  onSubmit(){
    console.log(this.signUpForm);
  }
}
