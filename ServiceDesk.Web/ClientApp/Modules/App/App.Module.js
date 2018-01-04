"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var API_Service_1 = require("Services/API.Service");
var Layout_Component_1 = require("./Components/Layout.Component");
var Header_Component_1 = require("./Components/Header.Component");
var Navigation_Component_1 = require("./Components/Navigation.Component");
var Footer_Component_1 = require("./Components/Footer.Component");
var UrlRoutes = [
    { path: 'Home', loadChildren: 'Modules/Home/Home.Module' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(UrlRoutes, { useHash: true })
        ],
        providers: [
            API_Service_1.APIService
        ],
        declarations: [
            Layout_Component_1.LayoutComponent,
            Header_Component_1.HeaderComponent,
            Navigation_Component_1.NavigationComponent,
            Footer_Component_1.FooterComponent
        ],
        bootstrap: [Layout_Component_1.LayoutComponent]
    })
], AppModule);
exports.AppModule = AppModule;
