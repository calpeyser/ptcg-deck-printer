import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DeckSelectionComponent } from '../deck-selection/deck-selection.component';
import { CardTableComponent } from '../card-table/card-table.component';
import { CardRowComponent } from '../card-row/card-row.component';
import { GenerateButtonComponent } from '../generate-button/generate-button.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    DeckSelectionComponent,
    CardTableComponent,
    CardRowComponent,
    GenerateButtonComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
