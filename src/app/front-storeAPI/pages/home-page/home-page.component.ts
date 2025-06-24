import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '../../../products/components/productCard/productCard.component';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { PaginationService } from '../../../shared/components/pagination/pagination.service';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

  productsService = inject(ProductsService);
  paginationService = inject(PaginationService);

  limit = signal(10);
  category = signal('');

  // Usa la señal reactiva de la página actual desde el servicio
  page = this.paginationService.currentPage;

  productsResource = rxResource({
    request : ()=> ({
      limit: this.limit(),
      category: this.category(),
      page: this.page(), // Ya está sincronizado con la URL
    }),
    loader: ({request}) => {
      return this.productsService.getProducts(request)
    }
  });

  // Calcula el total de páginas (ajusta según tu API)
  totalPages = signal(1); // Debes actualizar este valor cuando recibas los datos

  // Si quieres cambiar la página desde el código (opcional)
  goToPage(newPage: number) {
    // Aquí puedes navegar usando el router para actualizar el query param 'page'
    // O dejar que el usuario use los botones de paginación que ya actualizan la URL
  }

}
