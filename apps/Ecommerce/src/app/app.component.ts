import { UtilService } from '@angular-monorepo/shared-utils';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appServicesDI } from "./shared/DI.constant";

@Component({
  imports: [RouterModule],
  providers: [appServicesDI],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  _utilService = inject(UtilService);
  title: any = 'Ecommerce';

  ngOnInit() {
  }
}
