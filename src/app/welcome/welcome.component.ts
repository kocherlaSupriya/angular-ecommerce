import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  //standalone:true
})
export class WelcomeComponent implements OnInit{
  pageTitle='Welcome';
  logintitle='Login';
  isloggedIn=false;
  constructor(private route:Router,private toastr:ToastrService){}
  ngOnInit(): void {
    if(this.isLoggedIn()){
      this.isloggedIn=true;
    }
  }
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
  logout(){
      localStorage.removeItem('token')
      this.isloggedIn=false;
      this.toastr.success('Logout Successfully')
      //this.route.navigate(['/welcome']);
  }
  
}
