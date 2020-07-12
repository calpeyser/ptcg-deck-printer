import { Component, VERSION } from '@angular/core';
import { CardService } from '../card/card.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private cardService : CardService) {}

  ngOnInit() {
  }

  getCards() {
    return this.cardService.getCards()
  }

}
