import { Component, VERSION } from '@angular/core';
import { CardService, Card } from '../card/card.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  cards : Card[];

  constructor(private cardService : CardService) {}

  ngOnInit() {
    this.cards = this.cardService.getCards()
  }
}
