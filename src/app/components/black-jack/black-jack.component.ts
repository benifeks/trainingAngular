import { Component } from '@angular/core';

import { Result, CardValues } from 'src/app/models/black-jackModels';

@Component({
  selector: 'app-black-jack',
  templateUrl: './black-jack.component.html',
  styleUrls: ['./black-jack.component.css'],
})
export class BlackJackComponent {
  public showResultPlayer: string | number = '---';
  public showResultBankir: string | number = '---';
  public resultMessage: string = 'ПЕРЕМЕШАЙТЕ КОЛОДУ';
  public showCardsPlayer: CardValues[] = [];
  public showCardsBankir: string[] = [];

  public updateResult(result: Result): void {
    this.showResultPlayer = result.resultPlayer;
    this.showResultBankir = result.resultBankir;
    this.resultMessage = result.resultMessage;
    this.showCardsPlayer = result.resultCardsPlayer;
    this.showCardsBankir = result.resultCardsBankir;
  }
}
