/* eslint-disable */
exports.__esModule = true
const data = require('../data/people.json')
const PeopleService = /** @class */ (function() {
  function PeopleService() {
    this.DELAY = 1000
  }
  PeopleService.prototype.search = function(opts) {
    const _this = this
    // console.log(opts);
    const pageSize = opts.size
    const from = opts.from || 0
    return new Promise(function(resolve) {
      setTimeout(function() {
        const records = data.slice(from, pageSize)
        resolve({
          records: records,
          meta: {
            total: data.length,
            request: opts,
          },
        })
      }, _this.DELAY)
    })
    // return new Promise<DataGridResponse<Person[]>>(resolve => {
    //   setTimeout(() => {
    //     const out = data.slice(from, pageSize);
    //     resolve(out);
    //   }, this.DELAY);
    // });
  }
  return PeopleService
})()
exports.default = PeopleService
