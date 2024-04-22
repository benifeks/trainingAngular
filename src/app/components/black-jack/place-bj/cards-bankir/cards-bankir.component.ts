import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-bankir',
  templateUrl: './cards-bankir.component.html',
  styleUrls: ['./cards-bankir.component.css'],
})
export class CardsBankirComponent {
  @Input() public showCardsBankir: string[];
}
