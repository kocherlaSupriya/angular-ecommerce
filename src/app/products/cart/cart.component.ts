import { Component, OnInit, QueryList } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
   constructor(private ps:ProductService,private route:Router){}
   cdata:any;
   total=0;

   ngOnInit(): void {
     this.ps.cartdata().subscribe(
      (data:any)=>{
        this.cdata=data;
        let cartlen=data.length;
        //console.log(cartlen);
        localStorage.setItem('itemscount',cartlen)
 
        this.totalamt();
      })

   }

  
   deleteitem(id:any){
    this.ps.delete(id).subscribe(
      data=>{
        console.log(data);
        window.location.reload();
      })
   }
   
  clearcart(){
    this.ps.deletecart().subscribe((data)=>{console.log(data)});
  }
   
   increment_qty(p:any){
    p.qty+=1;
    this.totalamt();
   }
   decrement_qty(p:any){
    if(p.qty!=1){
      p.qty-=1
    }
    this.totalamt();
   }
  totalamt(){
    this.total= this.cdata.reduce(function(acc:any,val:any){
      return acc+(val.price*val.qty)
},0)
  }
}

