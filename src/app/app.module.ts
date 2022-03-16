import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { TransformaNombrePipe } from './pipes/transforma-nombre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    TransformaNombrePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
