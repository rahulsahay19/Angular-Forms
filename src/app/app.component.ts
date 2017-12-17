import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  reply='';
  gender = ['Male','Female',"Don't want to disclose" ];
  checkUserName() {
    const availableName = 'admin';
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
  }
}
