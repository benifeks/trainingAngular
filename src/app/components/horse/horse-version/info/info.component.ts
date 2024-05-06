import { Component, Input } from '@angular/core';

import { AllResults } from 'src/app/models/allDataHorse';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  @Input() allResults: AllResults;
}
