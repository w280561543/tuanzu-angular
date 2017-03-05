"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HousingRoomComponent = (function () {
    function HousingRoomComponent() {
    }
    return HousingRoomComponent;
}());
HousingRoomComponent = __decorate([
    core_1.Component({
        template: "\n\t<div class=\"container-fluid p-0\">\n\t\t<div class=\"row no-gutters\">\n\t\t\t<div class=\"hidden-sm-down col-md-2\">\n\t\t\t\t<t-siderbar></t-siderbar>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-12 col-md-10 col-md-offset-2\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t</div>"
    })
], HousingRoomComponent);
exports.HousingRoomComponent = HousingRoomComponent;
//# sourceMappingURL=housing-room.component.js.map