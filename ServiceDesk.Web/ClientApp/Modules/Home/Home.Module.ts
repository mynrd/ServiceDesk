import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppService } from 'Service/app.service';

import { HomeComponent } from './Components/Home.Component';

const UrlRoutes: Routes = [
    { path: 'Home', loadChildren: 'Modules/Home/Home.Module' },
]

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        RouterModule.forChild(UrlRoutes)
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }