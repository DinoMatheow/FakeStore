import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductsStore } from '../../interfaces/products.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './productCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  product = input.required<ProductsStore>();

 }
