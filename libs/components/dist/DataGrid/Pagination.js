function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import classnames from 'classnames';
import PaginationRT from 'react-table/lib/pagination';
import Input from '../Input';
import Select from '../Select';
import uniqueId from 'lodash.uniqueid'; // From react-table@6.8.6
// See https://github.com/react-tools/react-table/blob/f55ce620411c619855a2fe2f081407e4f82727b9/src/pagination.js

class Pagination extends PaginationRT {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "uniqueId", uniqueId('datagrid_pagination_'));
  }

  render() {
    const {
      // Computed
      pages,
      // Props
      page,
      showPageSizeOptions,
      pageSizeOptions,
      pageSize,
      showPageJump,
      canPrevious,
      canNext,
      onPageSizeChange,
      className,
      PreviousComponent = defaultButton,
      NextComponent = defaultButton
    } = this.props;
    return React.createElement("div", {
      className: classnames(className, '-pagination'),
      style: this.props.style
    }, React.createElement("div", {
      className: "-previous"
    }, React.createElement(PreviousComponent, {
      onClick: () => {
        if (!canPrevious) return;
        this.changePage(page - 1);
      },
      disabled: !canPrevious
    }, this.props.previousText)), React.createElement("div", {
      className: "-center"
    }, React.createElement("div", {
      className: "-pageInfo d-none d-md-inline-flex align-items-center"
    }, React.createElement("span", {
      className: "mr-1"
    }, this.props.pageText), showPageJump ? React.createElement("div", {
      className: "-pageJump"
    }, React.createElement("label", {
      className: "sr-only",
      htmlFor: `${this.uniqueId}_pageJump`
    }, "Page Jump"), React.createElement(Input, {
      id: `${this.uniqueId}_pageJump`,
      type: this.state.page === '' ? 'text' : 'number',
      onChange: e => {
        const val = e.target.value;
        const page = val - 1;

        if (val === '') {
          return this.setState({
            page: val
          });
        }

        this.setState({
          page: this.getSafePage(page)
        });
      },
      value: this.state.page === '' ? '' : this.state.page + 1,
      onBlur: this.applyPage,
      onKeyPress: e => {
        if (e.which === 13 || e.keyCode === 13) {
          this.applyPage();
        }
      }
    })) : React.createElement("span", {
      className: "-currentPage"
    }, page + 1), ' ', React.createElement("span", {
      className: "mx-1"
    }, this.props.ofText), React.createElement("span", {
      className: "-totalPages"
    }, pages || 1)), showPageSizeOptions && React.createElement("div", {
      className: "select-wrap -pageSizeOptions"
    }, React.createElement(Select, {
      value: pageSize,
      style: {
        textAlign: 'left'
      },
      options: pageSizeOptions.map((option, i) => ({
        value: option,
        label: `${option} ${this.props.rowsText}`
      })),
      onChange: ({
        value
      }) => onPageSizeChange(Number(value)),
      clearable: false,
      searchable: false
    }))), React.createElement("div", {
      className: "-next"
    }, React.createElement(NextComponent, {
      onClick: () => {
        if (!canNext) return;
        this.changePage(page + 1);
      },
      disabled: !canNext
    }, this.props.nextText)));
  }

}

export default Pagination;