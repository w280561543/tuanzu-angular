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
var core_1 = require("@angular/core");
var housing_service_1 = require("../housing.service");
var HousingDashboardComponent = (function () {
    function HousingDashboardComponent(_housingService) {
        this._housingService = _housingService;
        this.filters = {};
        this.page = {
            "config": {
                "currentPage": 1,
                "itemsPerPage": 15,
                "totalItems": 0
            },
            "rows": [],
            "filteredData": [],
            "isOpen": [],
            "totalPages": 0,
            "pages": []
        };
        this.data = {};
    }
    HousingDashboardComponent.prototype.ngOnInit = function () {
        this.getHousing();
    };
    HousingDashboardComponent.prototype.getHousing = function () {
        var _this = this;
        this._housingService.getAll()
            .subscribe(function (r) {
            _this.data = r.json().data;
            _this.page.config.totalItems = _this.data.length;
            _this.page.totalPages = _this.calculateTotalPages(_this.page.config);
            _this.changeTable();
        });
    };
    HousingDashboardComponent.prototype.onChangeFilter = function () {
        var _this = this;
        if (JSON.stringify(this.filters) !== '{}') {
            var filteredData = this.data;
            var _loop_1 = function (f) {
                if (this_1.filters[f]) {
                    filteredData = filteredData.filter(function (i) {
                        return i[f].match(_this.filters[f]);
                    });
                }
            };
            var this_1 = this;
            for (var f in this.filters) {
                _loop_1(f);
            }
            this.page.config.totalItems = filteredData.length;
            this.page.totalPages = this.calculateTotalPages(this.page.config);
            this.page.config.currentPage = 1;
            this.page.filteredData = filteredData;
            this.changeTable();
        }
    };
    HousingDashboardComponent.prototype.selectPage = function (currentPage, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.page.config.currentPage !== currentPage) {
            this.page.config.currentPage = currentPage;
            this.changeTable();
        }
    };
    HousingDashboardComponent.prototype.changeTable = function () {
        this.page.rows = this.changePage(this.page.config, this.page.filteredData.length > 0 ? this.page.filteredData : this.data);
        this.page.pages = this.getPages(this.page);
    };
    HousingDashboardComponent.prototype.calculateTotalPages = function (pc) {
        return Math.max(pc.itemsPerPage < 1 ? 1 : Math.ceil(pc.totalItems / pc.itemsPerPage) || 0, 1);
    };
    HousingDashboardComponent.prototype.changePage = function (pc, d) {
        var start = (pc.currentPage - 1) * pc.itemsPerPage;
        var end = pc.itemsPerPage > -1 ? (start + pc.itemsPerPage) : d.length;
        return d.slice(start, end);
    };
    HousingDashboardComponent.prototype.getPages = function (p) {
        var pages = [];
        var maxSize = 5;
        var startPage = 1;
        var endPage = p.totalPages;
        //startPage = ((Math.ceil(p.config.currentPage / maxSize) - 1) * maxSize) + 1;
        startPage = Math.max(p.config.currentPage - Math.floor(maxSize / 2), 1);
        endPage = Math.min(startPage + maxSize - 1, p.totalPages);
        for (var n = startPage; n <= endPage; n++) {
            pages.push({
                number: n,
                text: n.toString(),
                active: n === p.config.currentPage
            });
        }
        return pages;
    };
    return HousingDashboardComponent;
}());
HousingDashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'housing-dashboard.component.html'
    }),
    __metadata("design:paramtypes", [housing_service_1.HousingService])
], HousingDashboardComponent);
exports.HousingDashboardComponent = HousingDashboardComponent;
//# sourceMappingURL=housing-dashboard.component.js.map