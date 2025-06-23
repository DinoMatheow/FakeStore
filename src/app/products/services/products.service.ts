import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { map, Observable } from 'rxjs';
import { ProductsStore } from '../interfaces/products.interface';

const baseUrl = environment.baseUrl + 'products';

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



  getProductByIdSlug(idSlug: string): Observable<ProductsStore | undefined>{
     return this.getProducts({limit:20}).pipe(
      map(products => products.find(product => this.slugify(product.title) === idSlug))
     );
  }

  public slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/['"]/g, '') // elimina comillas
      .replace(/\s+/g, '-') // reemplaza espacios por guiones
      .replace(/[^a-z0-9-]/g, ''); // elimina caracteres especiales
  }


}