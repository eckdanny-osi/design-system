import Grid from './Grid'
import Container from './Container'
import Row from './Row'
import Col from './Col'
import * as GridExports from './'

describe('Grid', () => {
  it('namespaces the Container component', () =>
    expect(Grid.Container).toBe(Container))

  it('namespaces the Row component', () => expect(Grid.Row).toBe(Row))

  it('namespaces the Col component', () => expect(Grid.Col).toBe(Col))
})

describe('Grid exports', () => {
  it('includes Grid', () => expect(GridExports.Grid).toBe(Grid))
  it('includes Container', () => expect(GridExports.Container).toBe(Container))
  it('includes Row', () => expect(GridExports.Row).toBe(Row))
  it('includes Col', () => expect(GridExports.Col).toBe(Col))
})
