import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-generate-button',
  templateUrl: './generate-button.component.html',
  styleUrls: ['./generate-button.component.css']
})
export class GenerateButtonComponent implements OnInit {
  @Input() cards : Card[];

  constructor() { }

  ngOnInit(): void {
  }

  blankCard() : Card {
    var card = {
      name: "",
      img: "",
      img_base64: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
      expansion: "",
      count: 0
    }
    return card
  }

  createPage(cardChunk : Card[]) {
    var filledCardChunk : Card[] = [];
    for (var i = 0; i < 8; i++) {
      if (i < cardChunk.length) {
        filledCardChunk.push(cardChunk[i])
      } else {
        filledCardChunk.push(this.blankCard())
      }
    }

    const img_width = 165
    const documentDefinition = {
      pageOrientation: 'landscape',
      pageSize: 'LETTER',
      content: [
        {
          layout: 'noBorders', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 0,
            widths: [ '*', '*', '*', '*' ],
    
            body: [
              [
                { image: filledCardChunk[0].img_base64, width: img_width, margin: [ -2, 15, 0, 0 ] },
                { image: filledCardChunk[1].img_base64, width: img_width, margin: [ 2, 15, 0, 0 ] },
                { image: filledCardChunk[2].img_base64, width: img_width, margin: [ 4, 15, 0, 0 ] },
                { image: filledCardChunk[3].img_base64, width: img_width, margin: [ 6, 15, 0, 0 ] },
              ],
              [
                { image: filledCardChunk[4].img_base64, width: img_width, margin: [ -2, 50, 0, 0 ] },
                { image: filledCardChunk[5].img_base64, width: img_width, margin: [ 2, 50, 0, 0 ] },
                { image: filledCardChunk[6].img_base64, width: img_width, margin: [ 4, 50, 0, 0 ] },
                { image: filledCardChunk[7].img_base64, width: img_width, margin: [ 6, 50, 0, 0 ] },
              ],
            ]
          }
        }
      ],
    }
    return documentDefinition;
  }

  generateStickers() {
    var selectedCards : Card[] = []
    for (var card of this.cards) {
      for (var j = 0; j < card.count; j++) {
        console.log(card.name)
        selectedCards.push(card)
      }
    }

    var cardChunks : Card[][] = [];
    var currentChunk : Card[] = [];
    for (var i = 0; i < selectedCards.length; i++) {
      if (i%8 == 0) {
        currentChunk = [];
      }
      currentChunk[i%8] = selectedCards[i];
      if (i%8 == 7) {
        cardChunks.push(currentChunk);
      }
    }
    if (currentChunk.length < 8) {
      cardChunks.push(currentChunk)
    }

    for (var cardChunk of cardChunks) {
      console.log(cardChunk)
      var doc = this.createPage(cardChunk)
      pdfMake.createPdf(doc).download();
    }
  }

}
