import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    HomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
