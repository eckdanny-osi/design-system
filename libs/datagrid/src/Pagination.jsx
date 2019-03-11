import React, { Component } from 'react'
import classnames from 'classnames'
import { Input, Util } from '@cwds/reactstrap'
import Select from 'react-select'
import uniqueId from 'lodash.uniqueid'

// From react-table@6.8.6
// See https://github.com/react-tools/react-table/blob/f55ce620411c619855a2fe2f081407e4f82727b9/src/pagination.js
const { keyCodes } = Util
const defaultButton = props => (
  <button type="button" {...props} className="-btn">
    {props.children}
  </button>
)

class Pagination extends Component {
  uniqueId = uniqueId('datagrid_pagination_')
  constructor(props) {
    super()

    this.getSafePage = this.getSafePage.bind(this)
    this.changePage = this.changePage.bind(this)
    this.applyPage = this.applyPage.bind(this)

    this.state = {
      page: props.page,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ page: nextProps.page })
  }

  getSafePage(page) {
    if (Number.isNaN(page)) {
      page = this.props.page
    }
    return Math.min(Math.max(page, 0), this.props.pages - 1)
  }

  changePage(page) {
    page = this.getSafePage(page)
    this.setState({ page })
    if (this.props.page !== page) {
      this.props.onPageChange(page)
    }
  }

  applyPage(e) {
    if (e) {
      e.preventDefault()
    }
    const page = this.state.page
    this.changePage(page === '' ? this.props.page : page)
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
      NextComponent = defaultButton,
      ...restProps
    } = this.props

    if (!restProps.manual && !restProps.loading && pages === 1) {
      return null
    }

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
                <Input
                  id={`${this.uniqueId}_pageJump`}
                  aria-label="Page Jump"
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
                    if (
                      e.which === keyCodes.enter ||
                      e.keyCode === keyCodes.enter
                    ) {
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
                aria-label="Page Size"
                value={value}
                style={{ textAlign: 'left' }}
                options={options}
                onChange={({ value }) => onPageSizeChange(Number(value))}
                clearable={false}
                searchable={false}
                menuPlacement="auto"
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
