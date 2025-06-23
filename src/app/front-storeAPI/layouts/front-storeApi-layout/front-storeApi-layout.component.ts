import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-front-store-api-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './front-storeApi-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontStoreApiLayoutComponent { }
