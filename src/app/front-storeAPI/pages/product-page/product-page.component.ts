import { Component, inject, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  standalone: true,
  imports:[CurrencyPipe],
})
export class ProductPageComponent {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  // Señal del ParamMap
  private paramMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap
  });

  // Computed para el id de la ruta
  routeId = computed(() => Number(this.paramMap().get('id')));

  // Señal del producto
  product = toSignal(
    this.productsService.getProductById(this.routeId()),
    { initialValue: null }
  );
}
