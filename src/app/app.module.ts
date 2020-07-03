import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    BrowserModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
