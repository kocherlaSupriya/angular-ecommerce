import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
constructor(private fb:FormBuilder,private toastr:ToastrService,private route:Router){}
RegistrationForm!:FormGroup;
RegisteredData:any[]=[];
ngOnInit(): void {
  this.RegistrationForm=this.fb.group({
    name:new FormControl('',{validators:[Validators.required,Validators.minLength(4)]}),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  const localData=localStorage.getItem('RegisteredData');
    if(localData!=null){
      this.RegisteredData=JSON.parse(localData);}  
}
submitRegistrationForm(data:any){
 this.RegisteredData.push(this.RegistrationForm.value)
 localStorage.setItem('RegisteredData',JSON.stringify(this.RegisteredData));
 this.toastr.success('Registration successful...')
 this.route.navigate(['/login']);
}
}