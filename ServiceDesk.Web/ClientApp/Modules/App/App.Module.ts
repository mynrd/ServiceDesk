import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { APIService } from 'Services/API.Service';

import { LayoutComponent } from './Components/Layout.Component';
import { HeaderComponent } from './Components/Header.Component';
import { NavigationComponent } from './Components/Navigation.Component';
import { FooterComponent } from './Components/Footer.Component';

const UrlRoutes: Routes = [
    { path: 'Home', loadChildren: 'Modules/Home/Home.Module' },
]

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        RouterModule.forRoot(UrlRoutes, { useHash: true })
    ],
    providers: [
        APIService
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        NavigationComponent,
        FooterComponent
    ],
    bootstrap: [LayoutComponent]
})
export class AppModule { }