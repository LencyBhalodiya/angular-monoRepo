import { UtilService } from '@angular-monorepo/shared-utils';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  providers: [UtilService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private _utilService: UtilService) { }
  title: any = 'Ecommerce';

  ngOnInit() {
    this.title = this._utilService.test();
  }
}
