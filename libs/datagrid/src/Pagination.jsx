import React from 'react'
import classnames from 'classnames'
import PaginationRT from 'react-table/lib/pagination'
import { Input } from '@cwds/reactstrap'
import Select from 'react-select'
import uniqueId from 'lodash.uniqueid'

// From react-table@6.8.6
// See https://github.com/react-tools/react-table/blob/f55ce620411c619855a2fe2f081407e4f82727b9/src/pagination.js

const defaultButton = props => (
  <button type="button" {...props} className="-btn">
    {props.children}
  </button>
)

class Pagination extends PaginationRT {
  uniqueId = uniqueId('datagrid_pagination_')
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
      NextComponent = defaultButton,
    } = this.props

    const options = pageSizeOptions.map((option, i) => ({
      value: option,
      label: `${option} ${this.props.rowsText}`,
    }))

    const value = options.find(({ value }) => value === pageSize)

    return (
      <div
        className={classnames(className, '-pagination')}
        style={this.props.style}
      >
        <div className="-previous">
          <PreviousComponent
            onClick={() => {
              if (!canPrevious) return
              this.changePage(page - 1)
            }}
            disabled={!canPrevious}
          >
            {this.props.previousText}
          </PreviousComponent>
        </div>
        <div className="-center">
          <div className="-pageInfo d-none d-md-inline-flex align-items-center">
            <span className="mr-1">{this.props.pageText}</span>
            {showPageJump ? (
              <div className="-pageJump">
                <label
                  className="sr-only"
                  htmlFor={`${this.uniqueId}_pageJump`}
                >
                  Page Jump
                </label>
                <Input
                  id={`${this.uniqueId}_pageJump`}
                  type={this.state.page === '' ? 'text' : 'number'}
                  onChange={e => {
                    const val = e.target.value
                    const page = val - 1
                    if (val === '') {
                      return this.setState({ page: val })
                    }
                    this.setState({ page: this.getSafePage(page) })
                    return undefined
                  }}
                  value={this.state.page === '' ? '' : this.state.page + 1}
                  onBlur={this.applyPage}
                  onKeyPress={e => {
                    if (e.which === 13 || e.keyCode === 13) {
                      this.applyPage()
                    }
                  }}
                />
              </div>
            ) : (
              <span className="-currentPage">{page + 1}</span>
            )}{' '}
            <span className="mx-1">{this.props.ofText}</span>
            <span className="-totalPages">{pages || 1}</span>
          </div>
          {showPageSizeOptions && (
            <div className="select-wrap -pageSizeOptions">
              <Select
                value={value}
                style={{ textAlign: 'left' }}
                options={options}
                onChange={({ value }) => onPageSizeChange(Number(value))}
                clearable={false}
                searchable={false}
              />
            </div>
          )}
        </div>
        <div className="-next">
          <NextComponent
            onClick={() => {
              if (!canNext) return
              this.changePage(page + 1)
            }}
            disabled={!canNext}
          >
            {this.props.nextText}
          </NextComponent>
        </div>
      </div>
    )
  }
}

export default Pagination
