"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var housing_room_contract_component_1 = require("./housing-room-contract.component");
var housing_room_contract_service_1 = require("./housing-room-contract.service");
var HousingRoomContractPrintComponent = (function () {
    function HousingRoomContractPrintComponent(_housingRoomContractComponent) {
        this._housingRoomContractComponent = _housingRoomContractComponent;
        this.active = 1;
    }
    HousingRoomContractPrintComponent.prototype.onNext = function () {
        this._housingRoomContractComponent.onActive(2);
    };
    return HousingRoomContractPrintComponent;
}());
HousingRoomContractPrintComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'housing-room-contract-print',
        templateUrl: 'housing-room-contract-print.component.html'
    }),
    __metadata("design:paramtypes", [housing_room_contract_component_1.HousingRoomContractComponent])
], HousingRoomContractPrintComponent);
exports.HousingRoomContractPrintComponent = HousingRoomContractPrintComponent;
var HousingRoomContractPrintMealComponent = (function () {
    function HousingRoomContractPrintMealComponent(_housingRoomContractService) {
        var _this = this;
        this._housingRoomContractService = _housingRoomContractService;
        this.data = {};
        _housingRoomContractService.model$.subscribe(function (r) {
            ;
            _this.data = r;
        });
    }
    return HousingRoomContractPrintMealComponent;
}());
HousingRoomContractPrintMealComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'housing-room-contract-print-meal',
        templateUrl: 'housing-room-contract-print-meal.component.html'
    }),
    __metadata("design:paramtypes", [housing_room_contract_service_1.HousingRoomContractService])
], HousingRoomContractPrintMealComponent);
exports.HousingRoomContractPrintMealComponent = HousingRoomContractPrintMealComponent;
var HousingRoomContractPrintGuideComponent = (function () {
    function HousingRoomContractPrintGuideComponent() {
    }
    return HousingRoomContractPrintGuideComponent;
}());
HousingRoomContractPrintGuideComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'housing-room-contract-print-guide',
        templateUrl: 'housing-room-contract-print-guide.component.html'
    })
], HousingRoomContractPrintGuideComponent);
exports.HousingRoomContractPrintGuideComponent = HousingRoomContractPrintGuideComponent;
var HousingRoomContractPrintReceiptComponent = (function () {
    function HousingRoomContractPrintReceiptComponent() {
    }
    return HousingRoomContractPrintReceiptComponent;
}());
HousingRoomContractPrintReceiptComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'housing-room-contract-print-receipt',
        templateUrl: 'housing-room-contract-print-receipt.component.html'
    })
], HousingRoomContractPrintReceiptComponent);
exports.HousingRoomContractPrintReceiptComponent = HousingRoomContractPrintReceiptComponent;
var HousingRoomContractPrintResourceComponent = (function () {
    function HousingRoomContractPrintResourceComponent() {
    }
    return HousingRoomContractPrintResourceComponent;
}());
HousingRoomContractPrintResourceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'housing-room-contract-print-resource',
        templateUrl: 'housing-room-contract-print-resource.component.html'
    })
], HousingRoomContractPrintResourceComponent);
exports.HousingRoomContractPrintResourceComponent = HousingRoomContractPrintResourceComponent;
//# sourceMappingURL=housing-room-contract-print.component.js.map