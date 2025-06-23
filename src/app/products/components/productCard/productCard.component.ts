import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductsStore } from '../../interfaces/products.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './productCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  product = input.required<ProductsStore>();

 }
