import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonModule } from '@angular/common';
import { TooltipService } from './tooltip.service';
import { TooltipComponent } from './tooltip/tooltip.component';
import { OtherViewComponent } from './other-view/other-view.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    TooltipComponent,
    OtherViewComponent
  ],
  providers: [
    TooltipService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
