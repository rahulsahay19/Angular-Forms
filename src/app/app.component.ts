import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkUserName() {
    const availableName = 'admin';
  }

  onSubmit(form:NgForm){
    console.log(form);
  }
}
