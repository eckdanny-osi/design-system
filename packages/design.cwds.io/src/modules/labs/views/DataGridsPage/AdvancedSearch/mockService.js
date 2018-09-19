"use strict";
exports.__esModule = true;
var data = require('../data/people.json');
var PeopleService = /** @class */ (function () {
    function PeopleService() {
        this.DELAY = 1000;
    }
    PeopleService.prototype.search = function (opts) {
        var _this = this;
        // console.log(opts);
        var pageSize = opts.size;
        var from = opts.from || 0;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var records = data.slice(from, pageSize);
                resolve({
                    records: records,
                    meta: {
                        total: data.length,
                        request: opts
                    }
                });
            }, _this.DELAY);
        });
        // return new Promise<DataGridResponse<Person[]>>(resolve => {
        //   setTimeout(() => {
        //     const out = data.slice(from, pageSize);
        //     resolve(out);
        //   }, this.DELAY);
        // });
    };
    return PeopleService;
}());
exports["default"] = PeopleService;
