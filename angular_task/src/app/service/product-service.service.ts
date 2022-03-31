import { HttpClient, HttpErrorResponse ,HttpHeaderResponse,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ProductClass } from '../class/product-class';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  product:any = new ProductClass;
  baseUrl = 'http://localhost:4000/products';
  httpHeader = new HttpHeaders().set("content-Type","application/app");

  constructor(private http : HttpClient) { }

  getProduct():Observable<any>{
    return this.http.get(`${this.baseUrl}`).pipe(map((res)=>{
     return res;

    }),
      catchError(this.errorHandler)
    )
  }

  getProductById(_id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}`+_id).pipe(map((res)=>{
     return res;

    }),
      catchError(this.errorHandler)
    )
  }

  postProduct(data:ProductClass):Observable<any>{
    return this.http.post(`${this.baseUrl}`,data).pipe(map((res)=>{
      return res;
    }),
    catchError(this.errorHandler)
    )
  }

  updateProduct(_id:any,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/${_id}`, data).pipe(map((res)=>{
      return res;
    }),
    catchError(this.errorHandler)
    )
  }

  deleteProduct(_id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${_id}`).pipe(map((res)=>{
      return res;
    }),
    catchError(this.errorHandler)
    )
  }


  errorHandler(error:HttpErrorResponse){
    console.warn(error);
    return throwError('error');

  }
}
