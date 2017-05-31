import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from "@angular-redux/store";
import { createLogger } from 'redux-logger';
// import { rootReducer } from './reducers';

import { AppComponent } from './app.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { GuestComponent } from './components/guest/guest.component';

interface IAppState { /* ... */ };

@NgModule({
  declarations: [
    AppComponent,
    GuestListComponent,
    GuestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<IAppState>) {
//    ngRedux.configureStore(rootReducer, {}, [ createLogger() ]);
  }
}
