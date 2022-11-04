import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductcardComponent } from './shared/component/productcard/productcard.component';
import { ProductformComponent } from './shared/component/productform/productform.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductformComponent,
    ProductcardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
