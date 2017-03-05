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
var housing_room_component_1 = require("./housing-room.component");
var housing_room_dashboard_component_1 = require("./dashboard/housing-room-dashboard.component");
var housing_room_contract_component_1 = require("./contract/housing-room-contract.component");
var housing_room_service_1 = require("./housing-room.service");
var housing_room_contract_service_1 = require("./contract/housing-room-contract.service");
var HousingRoomRoutingModule = (function () {
    function HousingRoomRoutingModule() {
    }
    return HousingRoomRoutingModule;
}());
HousingRoomRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                {
                    path: '',
                    component: housing_room_component_1.HousingRoomComponent,
                    children: [
                        { path: 'contract/:housing_room_id', component: housing_room_contract_component_1.HousingRoomContractComponent },
                        { path: '', component: housing_room_dashboard_component_1.HousingRoomDashboardComponent }
                    ]
                }
            ])
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            housing_room_service_1.HousingRoomService,
            housing_room_contract_service_1.HousingRoomContractService
        ]
    })
], HousingRoomRoutingModule);
exports.HousingRoomRoutingModule = HousingRoomRoutingModule;
//# sourceMappingURL=housing-room-routing.module.js.map