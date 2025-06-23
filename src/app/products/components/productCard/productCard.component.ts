import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ProductsStore } from '../../interfaces/products.interface';
import { CurrencyPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, RouterLink, RouterLinkActive],
  templateUrl: './productCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  productService = inject(ProductsService);

  product = input.required<ProductsStore>();

  getSlug(title: string): string {
    return this.productService.slugify(title);
  }

 }
