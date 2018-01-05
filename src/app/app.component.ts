import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  signUpForm:FormGroup;
  restictedAccess=['admin', 'super-admin'];
  checkUserName() {
    const availableName = 'admin';
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'employeeData': new FormGroup({
      'firstname': new FormControl('Rahul', Validators.required),
      'lastname': new FormControl('Sahay', Validators.required),
      'designation': new FormControl('Developer', Validators.required),
      'email': new FormControl('rahul@sahay.com',[Validators.required,Validators.email],this.restrictedEmails),
      'username': new FormControl('admin',[Validators.required,this.restictedUserAccess.bind(this)]),
      'areas': new FormArray([])
      })
      
    });

    // this.signUpForm.valueChanges.subscribe(
    //   (value)=>console.log(value)
    // );

    // this.signUpForm.statusChanges.subscribe(
    //   (value)=>console.log(value)
    // )
   }

  onSubmit(){
    console.log(this.signUpForm);
  }
  onAddAreas(){
    //Explicitly casting is required to treat the whole as form array.
    //In the absence of this, it would have resulted error.
    const control = new FormControl('Coding',Validators.required);
    (<FormArray>this.signUpForm.get('employeeData.areas')).push(control);
  }

  restictedUserAccess(inputValue:FormControl):{[s:string]:boolean}{
    if(this.restictedAccess.indexOf(inputValue.value)!==-1){
      return {'notAllowed':true};
    }
    //You should not be saying return {'notAllowed':false}, this way angular doesn't understand
    return null;
  }

  //Async validator
  restrictedEmails(inputValue:FormControl): Promise<any>|Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(inputValue.value=="rahul@sahay.com"){
          resolve({'emailNotAllowed':true})
        }else{
          resolve(null);
        }
      },1000);
    });
    return promise;
  }

}
