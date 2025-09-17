import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { ProductsStore } from '../interfaces/products.interface';
import { ProductID } from '../interfaces/productId.interface';

const baseUrl = environment.baseUrl + 'products';
// const baseUrlId = environment.baseUrl + 'products7';

interface Options{
  limit: number,
  category?: string,

}

@Injectable({providedIn: 'root'})
export class ProductsService {

  private http = inject(HttpClient);

  getProducts(options:Options): Observable<ProductsStore[]>{

    let url = baseUrl;
    if (options.category) {
      url += `/category/${options.category}`;
    }
    return this.http.get<ProductsStore[]>(url, {
      params: {
        limit:options.limit
      }
    })
  }

  getProductById(id: number): Observable<ProductID>{
    return this.http.get<ProductID>(baseUrl + `/${id}`, {
    })
  }






}
