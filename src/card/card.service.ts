import { Injectable } from '@angular/core';
import CardData from './gen1_pokemon_data.json';

export interface Card {
  name: String,
  img: String,
  expansion: String,
  count: number,
}

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() { }

  getCards() : Card[] {
    var result : Card[] = [];
    var card : Card;
    for (var data of CardData) {
      card = {
        name: data['name'],
        img: data['img'],
        expansion: data['expansion'],
        count: 0
      }
      result.push(card)
    }
    return result
  }

}