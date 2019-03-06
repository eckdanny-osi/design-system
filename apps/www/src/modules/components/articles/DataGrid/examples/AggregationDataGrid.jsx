import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  DataGrid,
  Icon,
  Util,
} from '@cwds/components'

const data = [
  {
    index: 0,
    author: 'D.K. Green',
    book: 'Gary Potter',
    inventory: 2,
  },
  {
    index: 1,
    author: 'D.K. Green',
    book: 'Fantastic Dog',
    inventory: 5,
  },
  {
    index: 2,
    author: 'D.K. Green',
    book: 'Prisoner',
    inventory: 10,
  },
  {
    index: 4,
    author: 'Mat Blurred',
    book: 'Rainbow Ten',
    inventory: 2,
  },
  {
    index: 5,
    author: 'Mat Blurred',
    book: 'Red May',
    inventory: 8,
  },
  {
    index: 6,
    author: 'Mat Blurred',
    book: 'Splinter',
    inventory: 10,
  },
  {
    index: 7,
    author: 'Laureline Blake',
    book: 'Spaceships Satellites',
    inventory: 11,
  },
  {
    index: 8,
    author: 'Joyce Hess',
    book: 'Flowers Bloom',
    inventory: 4,
  },
  {
    index: 9,
    author: 'Desiree Untz',
    book: 'Splinter Atom',
    inventory: 7,
  },
  {
    index: 10,
    author: 'Gabrielle Mattlock',
    book: 'Buildings and Houses',
    inventory: 3,
  },
  {
    index: 11,
    author: 'Mitch Fast',
    book: 'Fast and Angry',
    inventory: 4,
  },
  {
    index: 12,
    author: 'Mitch Fast',
    book: 'Slow and Speed',
    inventory: 4,
  },
  {
    index: 13,
    author: 'Gray Dawson',
    book: 'Full Alchemist',
    inventory: 5,
  },
  {
    index: 14,
    author: 'Dima Karkovsky',
    book: 'GooseHumps',
    inventory: 8,
  },
  {
    index: 15,
    author: 'Dima Karkovsky',
    book: 'Fountainleg',
    inventory: 10,
  },
]

const BooksCard = row => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Books</CardTitle>
      </CardHeader>
      <CardBody className="pt-0">
        <DataGrid
          data={data}
          pivotBy={['author']}
          columns={[
            {
              Header: 'Author',
              accessor: 'author',
              Expander: ({ isExpanded }) =>
                isExpanded ? (
                  <Icon className="mr-3" name={'chevron-down'} sz={'sm'} />
                ) : (
                  <Icon
                    className="mr-3"
                    name={'chevron-down'}
                    sz={'sm'}
                    rotation={Util.ROTATION.LEFT}
                  />
                ),
            },
            { Header: 'Book', accessor: 'book' },
            {
              Header: 'Inventory',
              accessor: 'inventory',
              aggregate: vals => vals.reduce((acc, cur) => acc + cur),
            },
          ]}
        />
      </CardBody>
    </Card>
  )
}

export default BooksCard
