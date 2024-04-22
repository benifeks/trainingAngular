import { Component, EventEmitter, Output } from '@angular/core';

import { BaseComponent } from '../../base.component';
import {
  Cards,
  WorkCards,
  Result,
  CardValues,
} from 'src/app/models/black-jackModels';
import { newDeck, hiddenCard } from '../variables';
import { BjService } from 'src/app/services/bj.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-control-bj',
  templateUrl: './control-bj.component.html',
  styleUrls: ['./control-bj.component.css'],
})
export class ControlBjComponent extends BaseComponent {
  @Output() updateResult: EventEmitter<Result> = new EventEmitter<Result>();

  public shuffleDisabled: boolean = false;
  public takeCardDisabled: boolean = true;
  public passDisabled: boolean = true;
  public newDeck = newDeck;
  public hiddenCard: string = hiddenCard;
  public resultPlayer: number = 0;
  public resultBankir: number = 0;
  public takeCardLink: string = '';

  private _showResult: Result = {
    resultPlayer: '',
    resultMessage: '',
    resultBankir: '',
    resultCardsPlayer: [],
    resultCardsBankir: [],
  };

  public workCards: WorkCards = {
    cardsPlayer: [],
    cardsBankir: [],
    cardsBankirHidden: [],
  };

  public constructor(private _bjService: BjService) {
    super();
  }

  public shuffleDeck(link: string): void {
    this._setStartValues();
    this._bjService
      .getCards(link)
      .pipe(takeUntil(this._destroy$$))
      .subscribe((deck) => {
        this.takeCardLink = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=2`;
        this.updateResult.emit(this._showResult);
        this.shuffleDisabled = true;
        this.takeCardDisabled = false;
      });
  }

  public makeMove(link: string): void {
    this.passDisabled = this.takeCardDisabled = true;
    this._bjService
      .getCards(link)
      .pipe(takeUntil(this._destroy$$))
      .subscribe((cards: Cards) => {
        this.passDisabled = this.takeCardDisabled = false;
        this._takeCards(cards);
        this.updateResult.emit(this._showResult);
      });
  }

  public passPlayer(link: string): void {
    this._bjService
      .getCards(link)
      .pipe(takeUntil(this._destroy$$))
      .subscribe((cards: Cards) => {
        this._pass(cards, link);
        this._showCards();
        this.updateResult.emit(this._showResult);
      });
  }

  private _startDisabled(): void {
    this.shuffleDisabled = false;
    this.takeCardDisabled = true;
    this.passDisabled = true;
  }

  private _setStartValues(): void {
    this.workCards.cardsPlayer = [];
    this.workCards.cardsBankir = [];
    this.resultPlayer = 0;
    this.resultBankir = 0;
    this._showResult.resultPlayer = '---';
    this._showResult.resultBankir = '---';
    this._showResult.resultMessage = 'ИГРА... ВОЗЬМИТЕ КАРТУ';
    this._showResult.resultCardsPlayer = [];
    this._showResult.resultCardsBankir = [];
  }

  private _convertValue(value: string): number | string {
    let currentValue: number | string;
    if (value === 'ACE') {
      currentValue = 11;
      return currentValue;
    }
    if (value === 'KING') {
      currentValue = 4;
      return currentValue;
    }
    if (value === 'QUEEN') {
      currentValue = 3;
      return currentValue;
    }
    if (value === 'JACK') {
      currentValue = 2;
      return currentValue;
    }
    currentValue = value;
    return currentValue;
  }

  private _countScores(cards: CardValues[]): number {
    return cards.reduce(
      (accumulator: number, currentCard: CardValues) =>
        accumulator + currentCard.value,
      0
    );
  }

  private _takeCardPlayer(data: Cards): void {
    this._showResult.resultCardsPlayer.push({
      image: data.cards[0].image,
      value: +this._convertValue(data.cards[0].value),
    });
    this.resultPlayer = this._countScores(this._showResult.resultCardsPlayer);
    this._showResult.resultPlayer = this.resultPlayer;
  }

  private _takeCardBankir(data: Cards): void {
    if (this.resultBankir < 16) {
      this.workCards.cardsBankir.push({
        image: data.cards[1].image,
        value: +this._convertValue(data.cards[1].value),
      });
      this.resultBankir = this._countScores(this.workCards.cardsBankir);
      this._showResult.resultCardsBankir.push(this.hiddenCard);
    }
    if (this.resultBankir >= 16) {
      this._showResult.resultBankir = 'ПАС';
    }
    if (this.resultBankir > 21) {
      this._showResult.resultMessage = 'ВЫ ВЫИГРАЛИ!!! Bankir - ПЕРЕБОР!!!';
      this._showCards();
      this._startDisabled();
      return;
    }
  }

  private _takeCards(cards: Cards): void {
    this._takeCardPlayer(cards);
    if (this.resultPlayer > 21) {
      this._showResult.resultMessage = 'ПЕРЕБОР!!! ВЫ ПРОИГРАЛИ...';
      this._showCards();
      this._startDisabled();
      return;
    }
    if (this.resultPlayer === 21) {
      this._showResult.resultMessage = 'Player - 21!!! ВЫ ВЫИГРАЛИ!!!';
      this._showCards();
      this._startDisabled();
      return;
    }
    this._takeCardBankir(cards);
    if (this.resultBankir === 21) {
      this._showResult.resultMessage = 'Bankir - "21"!!! ВЫ ПРОИГРАЛИ...';
      this._showCards();
      this._startDisabled();
      return;
    }
  }

  private _showCards(): void {
    this._showResult.resultBankir = this.resultBankir;
    this._showResult.resultCardsBankir = this.workCards.cardsBankir.map(
      (card: CardValues) => {
        return card.image;
      }
    );
  }

  private _pass(cards: Cards, link: string): void {
    this._startDisabled();
    this._launchTakeCardBankir(cards, link);
    if (this.resultBankir > 21) {
      this._showResult.resultMessage = 'ВЫ ВЫИГРАЛИ!!! Bankir - ПЕРЕБОР!!!';
      return;
    }
    if (this.resultBankir === this.resultPlayer) {
      this._showResult.resultMessage = 'НИЧЬЯ!!!';
      return;
    }
    if (this.resultBankir > this.resultPlayer) {
      this._showResult.resultMessage = 'ВЫ ПРОИГРАЛИ...';
      return;
    }
    if (this.resultBankir < this.resultPlayer) {
      this._showResult.resultMessage = 'ВЫ ВЫИГРАЛИ!!!';
      return;
    }
  }

  private _launchTakeCardBankir(cards: Cards, link: string): void {
    this._takeCardBankir(cards);
    if (this.resultBankir < 16) {
      this.passPlayer(link);
    }
  }
}
