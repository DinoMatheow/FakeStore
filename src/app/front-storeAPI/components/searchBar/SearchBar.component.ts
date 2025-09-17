import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductsStore } from '../../../products/interfaces/products.interface';

@Component({
  selector: 'search-bar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './SearchBar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {

  private router = inject(Router);
  query = signal('');
  product = input.required<ProductsStore[] | undefined>();
  filtered = signal<ProductsStore[]>([]);


  filterItems(val: string) {
    const q = val.toLowerCase().trim();
    if (!q) {
      this.filtered.set([]);
      return;
    }

    const list = this.product() ?? [];
    const results = list.filter(item => item.title.toLowerCase().includes(q));

    const uniqueResults = results.filter(
      (item, index, self) => self.findIndex(i => i.id === item.id) === index
    );

    this.filtered.set(uniqueResults);
  }

  filterItem = effect(() => {
    this.filterItems(this.query());
  });



selectItems(item: ProductsStore) {
  this.query.set(item.title);
  this.filtered.set([]);

  this.router.navigate(['products', item.id]);
}



 }
