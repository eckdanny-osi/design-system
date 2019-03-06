import React from 'react'
import {
  CaresProvider,
  Page,
  Breadcrumb,
  BreadcrumbItem,
  PageTitle,
} from '@cwds/components'

const MyBrand = () => <div>My Brand</div>

const MyUserMenu = () => <div>My UserMenu</div>

const PageStructure = () => (
  <CaresProvider Brand={MyBrand} UserMenu={MyUserMenu}>
    <Page
      PageTitle={<PageTitle>Context Overrides</PageTitle>}
      Breadcrumb={
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Parent</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/">Child</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>GrandChild</BreadcrumbItem>
        </Breadcrumb>
      }
    >
      Hello World
    </Page>
  </CaresProvider>
)

export default PageStructure
