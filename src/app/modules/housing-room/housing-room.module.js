"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var shared_module_1 = require("../../shared/shared.module");
var housing_room_routing_module_1 = require("./housing-room-routing.module");
var housing_room_component_1 = require("./housing-room.component");
var housing_room_dashboard_component_1 = require("./dashboard/housing-room-dashboard.component");
var housing_room_contract_component_1 = require("./contract/housing-room-contract.component");
var housing_room_contract_info_component_1 = require("./contract/housing-room-contract-info.component");
var housing_room_contract_print_component_1 = require("./contract/housing-room-contract-print.component");
var HousingRoomModule = (function () {
    function HousingRoomModule() {
    }
    return HousingRoomModule;
}());
HousingRoomModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            shared_module_1.SharedModule,
            housing_room_routing_module_1.HousingRoomRoutingModule
        ],
        declarations: [
            housing_room_component_1.HousingRoomComponent,
            housing_room_dashboard_component_1.HousingRoomDashboardComponent,
            housing_room_contract_component_1.HousingRoomContractComponent,
            housing_room_contract_info_component_1.HousingRoomContractInfoComponent,
            housing_room_contract_print_component_1.HousingRoomContractPrintComponent,
            housing_room_contract_print_component_1.HousingRoomContractPrintMealComponent,
            housing_room_contract_print_component_1.HousingRoomContractPrintGuideComponent,
            housing_room_contract_print_component_1.HousingRoomContractPrintReceiptComponent,
            housing_room_contract_print_component_1.HousingRoomContractPrintResourceComponent
        ]
    })
], HousingRoomModule);
exports.HousingRoomModule = HousingRoomModule;
//# sourceMappingURL=housing-room.module.js.map