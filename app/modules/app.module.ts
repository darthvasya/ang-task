import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './../components/app.component';
import { SpisokComponent } from './../components/spisok.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, SpisokComponent ],
    bootstrap:    [ AppComponent ],
    exports:      [ ],
    providers:    [ ]
})
export class AppModule { }
