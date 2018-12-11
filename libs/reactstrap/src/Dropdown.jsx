/* eslint-disable */
import 'react'
import ReactDOM from 'react-dom'
import { Util } from './utils'
import { Dropdown as RSDropdown } from 'reactstrap'

const { keyCodes } = Util

class Dropdown extends RSDropdown {
  getContainer() {
    if (this._$container) return this._$container
    this._$container = ReactDOM.findDOMNode(this)
    return this._$container
  }
  getMenuCtrl() {
    if (this._$menuCtrl) return this._$menuCtrl
    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]')
    return this._$menuCtrl
  }
  getMenuItems() {
    return this.getContainer().querySelectorAll('[role="menuitem"]')
  }

  handleKeyDown(e) {
    if (
      /input|textarea/i.test(e.target.tagName) ||
      (keyCodes.tab === e.which && e.target.getAttribute('role') !== 'menuitem')
    ) {
      return
    }

    e.preventDefault()

    if (this.props.disabled) return

    if (this.getMenuCtrl() === e.target) {
      if (
        !this.props.isOpen &&
        [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(
          e.which
        ) > -1
      ) {
        this.toggle(e)
        setTimeout(() => this.getMenuItems()[0].focus())
      }
    }

    if (this.props.isOpen && e.target.getAttribute('role') === 'menuitem') {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e)
        this.getMenuCtrl().focus()
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click()
        this.getMenuCtrl().focus()
      } else if (
        [keyCodes.down, keyCodes.up].indexOf(e.which) > -1 ||
        ([keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey)
      ) {
        const $menuitems = [...this.getMenuItems()]
        let index = $menuitems.indexOf(e.target)
        if (keyCodes.up === e.which || (keyCodes.p === e.which && e.ctrlKey)) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1
        } else if (
          keyCodes.down === e.which ||
          (keyCodes.n === e.which && e.ctrlKey)
        ) {
          index = index === $menuitems.length - 1 ? 0 : index + 1
        }
        $menuitems[index].focus()
      } else if (keyCodes.end === e.which) {
        const $menuitems = this.getMenuItems()
        $menuitems[$menuitems.length - 1].focus()
      } else if (keyCodes.home === e.which) {
        const $menuitems = this.getMenuItems()
        $menuitems[0].focus()
      } else if (e.which >= 48 && e.which <= 90) {
        const $menuitems = this.getMenuItems()
        const charPressed = String.fromCharCode(e.which).toLowerCase()
        for (let i = 0; i < $menuitems.length; i += 1) {
          const firstLetter =
            $menuitems[i].textContent &&
            $menuitems[i].textContent[0].toLowerCase()
          if (firstLetter === charPressed) {
            $menuitems[i].focus()
            break
          }
        }
      }
    }
  }
}

export default Dropdown
