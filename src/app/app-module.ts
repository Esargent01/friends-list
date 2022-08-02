import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app-component';
import { StoreModule, Store } from '@ngrx/store';
import { friendsListReducer } from '../ngrx/reducers/friends.reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApolloModule } from 'apollo-angular';
import { GraphQLModule } from 'src/services/gql-module';
import { HeaderComponent } from 'src/components/header/header.component';
import { EffectsModule } from '@ngrx/effects';
import { FriendsListEffects } from 'src/ngrx/effects/friends.effects';
import { FriendListDisplayComponent } from 'src/components/friend-list-display/friend-list-display.component';
import { environment } from 'src/environments/environment';
import { appInitFn } from './app-init';
import { FriendOutputComponent } from 'src/components/friend-output/friend-output.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ friendsList: friendsListReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([FriendsListEffects]),
    BrowserAnimationsModule,
    ApolloModule,
    GraphQLModule,
    HeaderComponent,
    FriendOutputComponent,
    FriendListDisplayComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitFn,
      multi: true,
      deps: [Store],
    }
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
