import { Component, Input } from '@angular/core';

import { AllResults } from 'src/app/models/allDataHorse';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
})
export class PlaceComponent {
  @Input() allResults: AllResults;
}
