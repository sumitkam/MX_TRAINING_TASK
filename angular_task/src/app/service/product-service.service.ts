import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ProductClass } from '../class/product-class';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  product!:ProductClass;
  baseUrl = './assets'

  constructor(private http : HttpClient) { }

  getProduct():Observable<any>{
    return this.http.get(`${this.baseUrl}/product.json`).pipe(map((res)=>{
      this.product = res;
      return this.product;
    }),
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:HttpErrorResponse){
    console.warn(error);
    return throwError('error');

  }
}
