import { Component, Input, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div *ngFor="let currentKeg of childKegList">
      <h1>{{ currentKeg.name  }}</h1><br />
      <h3> {{ currentKeg.description, currentKeg.price, currentKeg.alc }} </h1>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];

}
