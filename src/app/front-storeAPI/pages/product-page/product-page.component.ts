import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent {


  activateRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);

  productIdSlug: string = this.activateRoute.snapshot.params['idSlug'];


  productsResource = rxResource({
    request : ()=> ({idSlug: this.productIdSlug}),
    loader: ({request}) => {
      return this.productService.getProductByIdSlug(request.idSlug)
    }
  });





}
