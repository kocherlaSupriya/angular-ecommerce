import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
 carts:any;

  constructor(private route:Router,private ps:ProductService,private toastr:ToastrService,private fb:FormBuilder){}
   loginForm!:FormGroup;
   

   ngOnInit(): void {
    this.ps.cartdata().subscribe(
      (data)=>{this.carts=data }
     )
    this.loginForm=this.fb.group({
    name:new FormControl('',{validators:[Validators.required,Validators.minLength(4)]}),
    email:new FormControl('',[Validators.required,Validators.email]),
    
    address:this.fb.group({
      flatno:new FormControl(''),
      add1:new FormControl('',[Validators.required]),
      add2:new FormControl(''),
      city:new FormControl('',[Validators.required]),
      mno:new FormControl('',[Validators.required]),
      zipcode:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required])
    }),
    //tandc:new FormControl(false,{validators:[Validators.requiredTrue]}),
    // guests:this.fb.array([
    //   this.fb.group({guestName:[''],
    //   age:new FormControl('')})
    // ])
    
    })
  }
  submitLoginform(){
    console.log(this.loginForm.value)
  }
  

}
