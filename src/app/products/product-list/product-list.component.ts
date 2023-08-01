import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

   constructor(private ps:ProductService,private route:Router,private ls:LoginService){}
   productsData:any;
   count:any;
   loginUserName:any;
   ngOnInit(): void {

    this.loginUserName=this.ls.username;
    //console.log(this.loginUserName);
     this.ps.getProducts().subscribe(data=>{this.productsData=data})
  
      this.ps.cartdata().subscribe(
        (data:any)=>{
          let cartlen=data.length;
          localStorage.setItem('itemscount',cartlen);
          this.count=(localStorage.getItem('itemscount'))
        }
      )
   }
   addtocart(singleprod:any){
      this.ps.createdata(singleprod).subscribe(
        (data:any)=>{
        console.log(data);
      })
      this.loginUserName=this.ls.username;
      this.ps.cartdata().subscribe(
        (data:any)=>{
          let cartlen=data.length;
          localStorage.setItem('itemscount',cartlen);
          this.count=(localStorage.getItem('itemscount'))
        }
      )
   }
   @ViewChild('submenu') sm:any;
    toggle(){
      this.sm.nativeElement.classList.toggle('open-menu')
    }
    cart(){
      this.route.navigate(['products/cart'])
     }
     logout(){
      localStorage.removeItem('token')
      this.route.navigate(['/welcome'])
     }
    
     decrement(p:any){
      if(p.qty!=1){
        p.qty-=1
      }
     }
     increment(p:any){
      p.qty=p.qty+1
     }   
}