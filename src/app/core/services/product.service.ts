import { catchError, Observable, of, tap } from 'rxjs';
import { Type } from './../models/type.model';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ProductService {

  constructor(private http: HttpClient){}

  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>('api/products').pipe(
      tap((productList)=> console.log(productList)),
      catchError((error)=> {
        console.log(error);
        return of([]);
      })
    )
  }
}
