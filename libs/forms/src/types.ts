export interface IOption<T> {
  /** Visual label */
  label: string
  /** Value associated with the option */
  value: T
  /** Whether or not to enable the option */
  disabled?: boolean
}

export interface IListType<T> {
  /** Possible choices */
  options: IOption<T>[]
}
