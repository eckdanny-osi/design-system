import { createElement, cloneElement } from 'react'

const identity = x => x

/**
 *
 * @param {React.ReactNode} ElemOrComp
 * @param {*} props
 * @param {*} getterFn
 */
export const renderElementOrComponent = (
  ElemOrComp,
  props,
  getterFn = identity
) => {
  return typeof ElemOrComp === 'function'
    ? createElement(ElemOrComp, getterFn(props))
    : props
    ? cloneElement(ElemOrComp, props)
    : ElemOrComp
}
