import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private http:HttpClient) { }
  //arrdata=this.http.get('http://localhost:3000/products').subscribe((data)=>{console.log(data)})
  getProducts():Observable<any>
  {
   return this.http.get('http://localhost:3000/products') 
  }
  createdata(cart:any){
    // const httpheaders=new HttpHeaders();
    // httpheaders.append('content-type','application/json');
    return this.http.post('http://localhost:3000/cart',cart)
  }
  cartdata(){
    return this.http.get('http://localhost:3000/cart') 
    
  }
  delete(id:any){
    return this.http.delete('http://localhost:3000/cart/'+id);
  }
 deletecart (){
  return this.http.delete('http://localhost:3000/cart');
 }
 
 addtoOrderhistory(cart:any){
  // const httpheaders=new HttpHeaders();
  //   httpheaders.append('content-type','application/json');
    return this.http.post('http://localhost:3000/orderhistory',cart
    // , {headers:httpheaders}
    )
 }
 orderedData(){
  return this.http.get('http://localhost:3000/orderhistory')
 }
 
}
