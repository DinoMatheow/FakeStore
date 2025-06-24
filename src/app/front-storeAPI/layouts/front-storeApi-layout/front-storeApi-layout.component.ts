import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-front-store-api-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './front-storeApi-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontStoreApiLayoutComponent { }
