import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsStore } from '../../../products/interfaces/products.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '../../../products/services/products.service';
import { SearchBarComponent } from '../searchBar/SearchBar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, SearchBarComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private productsService = inject(ProductsService);

  products = toSignal<ProductsStore[] | undefined>(
    this.productsService.getProducts({ limit: 50 }),
    { initialValue: undefined }
  );
}
