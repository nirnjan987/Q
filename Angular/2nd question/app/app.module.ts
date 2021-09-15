import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterformComponent } from './registration.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule ],
  declarations: [ AppComponent, RegisterformComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }