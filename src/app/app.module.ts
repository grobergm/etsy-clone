import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavdropComponent } from './navdrop/navdrop.component';
import { PageComponent } from './page/page.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home/home.component';


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
    HomePageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
