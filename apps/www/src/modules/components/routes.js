/* eslint-disable import/no-webpack-loader-syntax */
import Components from '!babel-loader!@mdx-js/loader!./articles/Components.mdx'
import DataGridsPage from '!babel-loader!@mdx-js/loader!./articles/DataGrid/DataGrid.mdx'
import SimpleDataGrid from '!babel-loader!@mdx-js/loader!./articles/DataGrid/SimpleDataGrid.mdx'
import BasicSearchDataGrid from '!babel-loader!@mdx-js/loader!./articles/DataGrid/BasicSearchDataGrid.mdx'
import Avatar from '!babel-loader!@mdx-js/loader!./articles/Avatar/Avatar.mdx'
import Alert from '!babel-loader!@mdx-js/loader!./articles/Alert/Alert.mdx'
import Badge from '!babel-loader!@mdx-js/loader!./articles/Badge/Badge.mdx'
import Breadcrumbs from '!babel-loader!@mdx-js/loader!./articles/Breadcrumbs/Breadcrumbs.mdx'
import Button from '!babel-loader!@mdx-js/loader!./articles/Button/Button.mdx'
import ButtonGroup from '!babel-loader!@mdx-js/loader!./articles/ButtonGroup/ButtonGroup.mdx'
import Card from '!babel-loader!@mdx-js/loader!./articles/Card/Card.mdx'
// import CardStructure from '!babel-loader!@mdx-js/loader!./articles/Card/CardStructure.mdx';
import Grid from '!babel-loader!@mdx-js/loader!./articles/Grid/Grid.mdx'
import Icon from '!babel-loader!@mdx-js/loader!./articles/Icon/Icon.mdx'
import Infotip from '!babel-loader!@mdx-js/loader!./articles/Infotip/Infotip.mdx'
import MenuPage from '!babel-loader!@mdx-js/loader!./articles/Menu/MenuPage.mdx'
import TooltipPage from '!babel-loader!@mdx-js/loader!./articles/Tooltip/TooltipPage.mdx'
import Modal from '!babel-loader!@mdx-js/loader!./articles/Modal/Modal.mdx'
import Page from '!babel-loader!@mdx-js/loader!./articles/Page/Page.mdx'
import CaresProvider from '!babel-loader!@mdx-js/loader!./articles/CaresProvider/CaresProvider.mdx'

const routes = {
  title: 'Component Library',
  component: Components,
  path: '/components',
  children: [
    {
      title: 'Alert',
      path: '/alert',
      component: Alert,
    },
    {
      title: 'Avatar',
      path: '/avatar',
      component: Avatar,
    },
    {
      title: 'Badge',
      path: '/badge',
      component: Badge,
    },
    {
      title: 'Breadcrumbs',
      path: '/breadcrumbs',
      component: Breadcrumbs,
    },
    {
      title: 'Button',
      path: '/button',
      component: Button,
    },
    {
      title: 'ButtonGroup',
      path: '/button-group',
      component: ButtonGroup,
    },
    {
      title: 'Cards',
      path: '/cards',
      component: Card,
      // children: [
      //   {
      //     title: 'Structure',
      //     path: 'structure',
      //     component: CardStructure,
      //   },
      //   {
      //     title: 'Loading State',
      //     path: 'loading',
      //     component: () => <div>TODO</div>,
      //   },
      //   {
      //     title: 'MultiState',
      //     path: 'multistate',
      //     component: () => <div>TODO</div>,
      //   },
      // ],
    },
    // {
    //   title: 'CheckboxBank',
    //   path: '/checkboxbank',
    // },
    // {
    //   title: 'Collapse',
    //   path: '/collapse',
    // },
    {
      title: 'DataGrid',
      path: '/datagrid',
      component: DataGridsPage,
      children: [
        {
          title: 'Simple DataGrid',
          path: '/simple',
          component: SimpleDataGrid,
        },
        {
          title: 'DataGrid with Basic Search',
          path: '/basic-search',
          component: BasicSearchDataGrid,
        },
        // {
        //   title: 'Advanced Search (WiP)',
        //   path: '/advanced-search',
        //   component: AdvancedSearchDataGrid,
        // },
      ],
    },
    {
      title: 'Menu',
      path: '/menu',
      component: MenuPage,
    },
    // {
    //   title: 'Field',
    //   path: '/field',
    // },
    // {
    //   title: 'FormFeedback',
    //   path: '/formfeedback',
    // },
    // {
    //   title: 'FormGroup',
    //   path: '/formgroup',
    // },
    // {
    //   title: 'Forms',
    //   path: '/forms',
    // },
    {
      title: 'Grid',
      path: '/grid',
      component: Grid,
    },
    {
      title: 'Icon',
      path: '/icon',
      component: Icon,
    },
    {
      title: 'Infotip',
      path: '/infotip',
      component: Infotip,
    },
    // {
    //   title: 'Input',
    //   path: '/input',
    // },
    // {
    //   title: 'InputGroup',
    //   path: '/inputgroup',
    // },
    // {
    //   title: 'InputGroupAddon',
    //   path: '/inputgroupaddon',
    // },
    // {
    //   title: 'JumpToTop',
    //   path: '/jumptotop',
    // },
    // {
    //   title: 'Label',
    //   path: '/label',
    // },
    // {
    //   title: 'Layouts',
    //   path: '/layouts',
    // },
    // {
    //   title: 'Legend',
    //   path: '/legend',
    // },
    // {
    //   title: 'ListGroups',
    //   path: '/listgroups',
    // },
    // {
    //   title: 'Logo',
    //   path: '/logo',
    // },
    {
      title: 'Modal',
      path: '/modal',
      component: Modal,
    },
    // {
    //   title: 'Nav',
    //   path: '/nav',
    // },
    // {
    //   title: 'PageHeader',
    //   path: '/pageheader',
    // },
    // {
    //   title: 'Popover',
    //   path: '/popover',
    // },
    // {
    //   title: 'RadioGroup',
    //   path: '/radiogroup',
    // },
    // {
    //   title: 'Select',
    //   path: '/select',
    // },
    // {
    //   title: 'Toggle',
    //   path: '/toggle',
    // },
    {
      title: 'Tooltip',
      path: '/tooltip',
      component: TooltipPage,
    },
    {
      title: 'Page',
      path: '/page',
      component: Page,
    },
    {
      title: 'CaresProvider',
      path: '/component-provider',
      component: CaresProvider,
    },
  ],
}

export default routes
