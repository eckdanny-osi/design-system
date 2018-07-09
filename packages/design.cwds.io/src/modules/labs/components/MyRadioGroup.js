"use strict";
exports.__esModule = true;
var React = require("react");
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
// assume all FormikRenderProps available here
//  =>  <radioGroup {...} />
exports.RadioGroup = function (props) {
    var handleBlur = props.handleBlur, handleChange = props.handleChange, name = props.name, options = props.options, renderOption = props.renderOption, renderError = props.renderError, error = props.error, value = props.value, onChange = props.onChange;
    return (React.createElement(React.Fragment, null,
        options.map(function (option) { return renderOption({ option: option, name: name, onChange: onChange, value: value }); }),
        error && renderError(error)));
};
exports.RadioGroup.propTypes = {};
exports.RadioGroup.defaultProps = {
    renderOption: defaultRendererRadioGroup
};
