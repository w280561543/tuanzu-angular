"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var housing_component_1 = require("./housing.component");
var housing_bill_component_1 = require("./bill/housing-bill.component");
var housing_dashboard_component_1 = require("./dashboard/housing-dashboard.component");
var housing_service_1 = require("./housing.service");
var HousingRoutingModule = (function () {
    function HousingRoutingModule() {
    }
    return HousingRoutingModule;
}());
HousingRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                {
                    path: '',
                    component: housing_component_1.HousingComponent,
                    children: [
                        { path: 'bill', component: housing_bill_component_1.HousingBillComponent },
                        { path: '', component: housing_dashboard_component_1.HousingDashboardComponent }
                    ]
                }
            ])
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            housing_service_1.HousingService
        ]
    })
], HousingRoutingModule);
exports.HousingRoutingModule = HousingRoutingModule;
//# sourceMappingURL=housing-routing.module.js.map