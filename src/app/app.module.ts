import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TsOneComponent } from './components/ts-one/ts-one.component';
import { TsTwoComponent } from './components/ts-two/ts-two.component';
import { AngularOneComponent } from './components/angular-one/angular-one.component';
import { AngularTwoComponent } from './components/angular-two/angular-two.component';
import { AngularThreeComponent } from './components/angular-three/angular-three.component';
import { ScssOneComponent } from './components/scss-one/scss-one.component';
import { ScssTwoComponent } from './components/scss-two/scss-two.component';
import { TeaserComponent } from './components/scss-one/teaser/teaser.component';
import { StoreModule } from '@ngrx/store';
import { notificationsReducer } from './reducers/notifications.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TsOneComponent,
    TsTwoComponent,
    AngularOneComponent,
    AngularTwoComponent,
    AngularThreeComponent,
    ScssOneComponent,
    ScssTwoComponent,
    TeaserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(
      {
        notifications: notificationsReducer,
      },
      {}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
