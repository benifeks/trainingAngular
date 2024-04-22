import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-bj',
  templateUrl: './info-bj.component.html',
  styleUrls: ['./info-bj.component.css'],
})
export class InfoBjComponent {
  @Input() showResultPlayer: string | number = '---';
  @Input() showResultBankir: string | number = '---';
  @Input() resultMessage: string;
}
