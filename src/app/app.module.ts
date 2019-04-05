import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavdropComponent } from './navdrop/navdrop.component';
import { PageComponent } from './page/page.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReviewComponent } from './review/review.component';
import { BlogComponent } from './blog/blog.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavdropComponent,
    PageComponent,
    ProductRowComponent,
    ProductListComponent,
    ProductComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductDetailComponent,
    ReviewComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
