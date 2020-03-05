import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InitializeTableService } from './services/initialize-table.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    UserInputComponent
      ],
  imports: [
    BrowserModule
  ],
  providers: [
    InitializeTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
