import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductsStore } from '../../interfaces/products.interface';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './productCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  product = input.required<ProductsStore>();

 }
