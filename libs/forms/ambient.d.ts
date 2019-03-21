declare module '@cwds/reactstrap' {
  export { Input, FormGroup, Label } from 'reactstrap'
}

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
