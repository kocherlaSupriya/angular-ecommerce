import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  RegisteredData:any[]=[];
  loginForm!:FormGroup;
  constructor(private toastr:ToastrService ,private route:Router,private ls:LoginService,private fb:FormBuilder){ }
  
ngOnInit(): void {
  this.loginForm=this.fb.group({
    name:new FormControl('',{validators:[Validators.required,Validators.minLength(4)]}),
    //email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  const localData=localStorage.getItem('RegisteredData');
    if(localData!=null){
      this.RegisteredData=JSON.parse(localData);
    }
 
}
submitloginForm(data:any){
  const isUserExist=this.RegisteredData.find(m=>m.name==this.loginForm.value.name && m.password==this.loginForm.value.password)
  if(isUserExist!=undefined){
    this.toastr.success('LoggedIn successfully')
    this.ls.username=this.loginForm.value.name;
    localStorage.setItem('token','a1b2c3');  
    this.route.navigate(['/products']);
   }
   else{
    this.toastr.error('Login Failed');
   }
}
}

