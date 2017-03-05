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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var shared_module_1 = require("../../shared/shared.module");
var housing_routing_module_1 = require("./housing-routing.module");
var housing_component_1 = require("./housing.component");
var housing_bill_component_1 = require("./bill/housing-bill.component");
var housing_dashboard_component_1 = require("./dashboard/housing-dashboard.component");
var HousingModule = (function () {
    function HousingModule() {
    }
    return HousingModule;
}());
HousingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            shared_module_1.SharedModule,
            housing_routing_module_1.HousingRoutingModule
        ],
        declarations: [
            housing_component_1.HousingComponent,
            housing_bill_component_1.HousingBillComponent,
            housing_dashboard_component_1.HousingDashboardComponent
        ]
    })
], HousingModule);
exports.HousingModule = HousingModule;
//# sourceMappingURL=housing.module.js.map