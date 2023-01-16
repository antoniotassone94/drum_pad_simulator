import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomepageComponent} from "./componenti/homepage/homepage.component";
import {Errore404Component} from "./componenti/errore404/errore404.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Errore404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
