import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputLabelComponent } from './component/input-label/input-label.component';
import { ResultLabelComponent } from './component/result-label/result-label.component';

@NgModule({
  declarations: [
    AppComponent,
    InputLabelComponent,
    ResultLabelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
