import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal, rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductsService } from '../../../products/services/products.service';
import { ProductCardComponent } from '../../../products/components/productCard/productCard.component';

@Component({
  selector: 'app-category-page',
  imports: [ProductCardComponent],
  templateUrl: './category-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPageComponent {

  route =inject(ActivatedRoute);


   categorySlugToName: Record<string, string> = {
    'mens-clothing': "men's clothing",
    'womens-clothing': "women's clothing",
    'electronics': 'electronics',
    'jewelery': 'jewelery'
  };



  categoryProducts = toSignal(this.route.params.pipe(
    map(({category}) => this.categorySlugToName[category] ?? category)
  ))

  productsService = inject(ProductsService);
  limit = signal(20);

  productsResource = rxResource({
    request : ()=> ({
      limit:this.limit(), category: this.categoryProducts()}),
    loader: ({request}) => {
      return this.productsService.getProducts(request)
    }
  });
 }
