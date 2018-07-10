"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var PropTypes = require("prop-types");
var utils_1 = require("./utils");
var components_1 = require("@cwds/components");
var defaultRenderOption = function (_a) {
    var name = _a.name, 
    // onBlur: handleBlur,
    handleChange = _a.onChange, option = _a.option, value = _a.value;
    var id = "uniq__" + name + "--" + option.label;
    return (React.createElement(components_1.FormGroup, { key: id, check: true, className: "ml-2" },
        React.createElement(components_1.Input, { id: id, name: name, type: "radio", checked: option.value === value, 
            // onBlur={handleBlur}
            onChange: handleChange, value: option.value }),
        React.createElement("label", { htmlFor: id }, option.label)));
};
/**
 * MyRadioGroup
 *
 * @example
 * <MyRadioGroup
 *   name="color"
 *   options={COLOR_OPTIONS}
 *   onChange={}
 *   touched={props.touched.color}
 *   error={props.errors.color}
 *   renderItem={({ error }) => (
 *     <div>{error}</div>
 *   )}
 * />
 */
var RadioGroup = /** @class */ (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOption = function (option, index) {
            // TODO: generate uuid here?
            return _this.props.renderOption({
                option: option,
                index: index,
                name: _this.props.name,
                value: _this.props.value,
                onChange: _this.handleChange,
                touched: _this.props.touched,
                error: _this.props.error
            });
        };
        _this.renderError = function () { };
        _this.handleBlur = function (e) {
            console.debug('RadioGroup#handleBlur()');
            _this.props.onBlur(e);
        };
        _this.handleChange = function (e) {
            console.debug('RadioGroup#handleChange()');
            _this.props.onChange(e);
        };
        return _this;
    }
    RadioGroup.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("fieldset", null,
                React.createElement(components_1.Legend, { required: true }, this.props.legend),
                this.props.options.map(this.renderOption)),
            this.props.error && this.props.renderError(this.props.error)));
    };
    RadioGroup.propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
    };
    RadioGroup.defaultProps = {
        error: '',
        onChange: utils_1.noop,
        options: [],
        valueAccessor: function (option) { return option.value; },
        renderOption: defaultRenderOption,
        renderError: function (errMsg) { return null; }
    };
    return RadioGroup;
}(React.Component));
exports["default"] = RadioGroup;
