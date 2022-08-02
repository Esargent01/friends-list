import { HttpClientModule} from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
   imports: [BrowserModule, HttpClientModule],
   providers: [
      {
         provide: APOLLO_OPTIONS,
         useFactory: (httpLink: HttpLink) => {
            return {
               cache: new InMemoryCache(),
               link: httpLink.create({
                  uri: 'http://localhost:3000',
               }),
            };
         },
         deps: [HttpLink],
      },
   ],
})
export class GraphQLModule {}