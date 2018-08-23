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
var noop = function () { };
exports.CheckboxBank = function (props) {
    return (React.createElement("div", null, props.options.map(function (option) {
        option.value;
    })));
};
var defaultRendererRadioGroup = function (_a) {
    var name = _a.name, handleBlur = _a.onBlur, handleChange = _a.onChange, option = _a.option, value = _a.value;
    var id = "uniq__" + name;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id, name: name, type: "radio", checked: option.value === value, onBlur: handleBlur, onChange: handleChange }),
        React.createElement("label", { htmlFor: id }, option.label)));
};
defaultRendererRadioGroup.defaultProps = {
    onBlur: noop,
    onChange: noop
};
// assume all FormikRenderProps available here
//  =>  <radioGroup {...} />
var getItemRenderProps = function (props) { return ({
    onChange: props.handleChange,
    onBlur: props.handleBlur,
    name: props.name,
    option: props.option,
    value: props.value
}); };
exports.RadioGroup = function (props) {
    var handleBlur = props.handleBlur, handleChange = props.handleChange, name = props.name, options = props.options, renderOption = props.renderOption, renderError = props.renderError, error = props.error, value = props.value, onChange = props.onChange, onBlur = props.onBlur;
    return (React.createElement(React.Fragment, null,
        options.map(function (option) {
            return renderOption({ option: option, name: name, onChange: onChange, onBlur: onBlur, value: value });
        }),
        error && renderError(error)));
};
exports.RadioGroup.propTypes = {};
exports.RadioGroup.defaultProps = {
    renderOption: defaultRendererRadioGroup
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
var MyRadioGroup = /** @class */ (function (_super) {
    __extends(MyRadioGroup, _super);
    function MyRadioGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOption = function (option, index) {
            // TODO: generate uuid here?
            return _this.props.renderItem({
                option: option,
                index: index,
                name: _this.props.name,
                value: _this.props.value,
                onChange: _this.handleChange
            });
        };
        _this.renderError = function () { };
        _this.handleBlur = function (e) {
            console.debug('handleBlur()');
            _this.props.onBlur(e);
        };
        _this.handleChange = function (e) {
            debugger;
            _this.props.onChange(e);
        };
        return _this;
    }
    MyRadioGroup.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            this.props.options.map(this.renderOption),
            this.props.error && this.props.renderError(this.props.error)));
    };
    // static propTypes = {
    //   name: PropTypes.string,
    // };
    MyRadioGroup.defaultProps = {
        error: '',
        onChange: noop,
        options: [],
        valueAccessor: function (option) { return option.value; }
    };
    return MyRadioGroup;
}(React.Component));
