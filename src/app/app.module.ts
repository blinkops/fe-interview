import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppComponent } from './app.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { SortPipe } from './pipes/sort.pipe';
import { FormsModule } from '@angular/forms';
import { FilterSortSectionComponent } from './filter-sort-section/filter-sort-section.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    WaitingListComponent,
    SortPipe,
    FilterSortSectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    NgxSliderModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
