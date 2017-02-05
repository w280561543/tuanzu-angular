"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isShow = [];
    }
    SidebarComponent.prototype.toggle = function (e, n) {
        e.stopPropagation();
        this.isShow[n] = !this.isShow[n];
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 't-siderbar',
        template: "\n    \t<ul class=\"nav nav-pills flex-column\">\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">\u9996\u9875</a>\n\t\t\t</li>\n\n\t\t\t<li class=\"small text-muted\">\u7BA1\u7406</li>\n\n\t\t\t<li class=\"nav-item dropdown\" [class.show]=\"isShow[0]\" routerLinkActive=\"show\">\n\t\t\t\t<a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0);\" (click)=\"toggle($event, 0)\">\u623F\u6E90\u7BA1\u7406</a>\n\t\t\t\t<div class=\"dropdown-menu\">\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/housing\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\ntrue}\">\u5957\u623F\u7BA1\u7406</a>\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/housing/bill\" routerLinkActive=\"active\">\u5957\u623F\u8D26\u5355</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\n\t\t\t<li class=\"nav-item dropdown\" [class.show]=\"isShow[1]\" routerLinkActive=\"show\">\n\t\t\t\t<a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0);\" (click)=\"toggle($event, 1)\">\u51FA\u79DF\u7BA1\u7406</a>\n\t\t\t\t<div class=\"dropdown-menu\">\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/housing-room\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\ntrue}\">\u79DF\u5BA2\u5408\u540C</a>\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0);\">\u79DF\u5BA2\u8D26\u5355</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\n\t\t</ul>\n    ",
        styleUrls: ['sidebar.component.css']
    })
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map