import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent {
  signupUsers:any[]=[];
  constructor(private route:Router,private toastr:ToastrService,private fb:FormBuilder){}

  loginForm!:FormGroup;
  ngOnInit(): void {
   
   this.loginForm=this.fb.group({
   name:new FormControl('',[Validators.required]),
   curpwd:new FormControl('',[Validators.required]),
   newpwd:new FormControl('',[Validators.required]),
     
   })
   
 }
updatePassword(){
   console.log(this.loginForm.value.name);
   

   const localData=localStorage.getItem('signupUsers');
   if(localData!=null){
     this.signupUsers=JSON.parse(localData);
   }
   for(let i=0;i<this.signupUsers.length;i++){
    if((this.signupUsers[i].username)===this.loginForm.value.name && (this.signupUsers[i].password)===this.loginForm.value.curpwd){
   this.signupUsers[i].password=this.loginForm.value.newpwd;
   localStorage.setItem("signupUsers",JSON.stringify(this.signupUsers))
   this.toastr.success('Password Updated Successfully!...')
   this.route.navigate(['products'])
    }
    else{
     this.toastr.error('Enter Credentials are Wrong')
    }
   }
 }




// changepwd={
//   uname:'',cpwd:'',npwd:''
// };
// signupUsers:any[]=[];

// notupdatepwd(){
//  this.route.navigate(['products']);
// }
  
// updatepswd(data:any){
// //console.log(data.value)
// const localData=localStorage.getItem('signupUsers');
// if(localData!=null){
//   this.signupUsers=JSON.parse(localData);
// }
//  //console.log(this.signupUsers)
//   for(let i=0;i<this.signupUsers.length;i++){
//     //console.log(this.signupUsers[i].username)
//    if((this.signupUsers[i].username)===data.value.uname && (this.signupUsers[i].password)===data.value.curpwd){
//   //console.log("user name is identified correctly...")
//   this.signupUsers[i].password=data.value.newpwd;
//   localStorage.setItem("signupUsers",JSON.stringify(this.signupUsers))
//   this.toastr.success('Password Updated Successfully!...')
//   this.route.navigate(['products'])
//    }
//    else{
//     this.toastr.error('Enter Credentials are Wrong')
//    }
//   }
// }







}