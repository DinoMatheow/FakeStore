import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '../../../products/components/productCard/productCard.component';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

  productsService = inject(ProductsService);
  limit = signal(10);
  category = signal('');

  productsResource = rxResource({
    request : ()=> ({
      limit:this.limit(), category: this.category()}),
    loader: ({request}) => {
      return this.productsService.getProducts(request)
    }
  });


 }
