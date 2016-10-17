import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Kegs a Plenty</h1>
    <keg-list></keg-list>
  </div>
  `
})

export class AppComponent {
  // public masterKegList: Keg [] = [
  //
  // ];
}
