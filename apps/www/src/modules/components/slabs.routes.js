/* eslint-disable import/no-webpack-loader-syntax */
import Components from '!babel-loader!@mdx-js/loader!./modules/Components.mdx'
import DataGridsPage from '!babel-loader!@mdx-js/loader!./modules/DataGrid/DataGrid.mdx'
import SimpleDataGrid from '!babel-loader!@mdx-js/loader!./modules/DataGrid/SimpleDataGrid.mdx'
import BasicSearchDataGrid from '!babel-loader!@mdx-js/loader!./modules/DataGrid/BasicSearchDataGrid.mdx'
import AdvancedSearchDataGrid from '!babel-loader!@mdx-js/loader!./modules/DataGrid/AdvancedSearchDataGrid.mdx'
import Avatar from '!babel-loader!@mdx-js/loader!./modules/Avatar/Avatar.mdx'
import Alert from '!babel-loader!@mdx-js/loader!./modules/Alert/Alert.mdx'
import Badge from '!babel-loader!@mdx-js/loader!./modules/Badge/Badge.mdx'
import BreadcrumbTrail from '!babel-loader!@mdx-js/loader!./modules/BreadcrumbTrail/BreadcrumbTrail.mdx'
import Button from '!babel-loader!@mdx-js/loader!./modules/Button/Button.mdx'
import ButtonGroup from '!babel-loader!@mdx-js/loader!./modules/ButtonGroup/ButtonGroup.mdx'
import Card from '!babel-loader!@mdx-js/loader!./modules/Card/Card.mdx'
// import CardStructure from '!babel-loader!@mdx-js/loader!./modules/Card/CardStructure.mdx';
import Grid from '!babel-loader!@mdx-js/loader!./modules/Grid/Grid.mdx'
import Icon from '!babel-loader!@mdx-js/loader!./modules/Icon/Icon.mdx'
import Infotip from '!babel-loader!@mdx-js/loader!./modules/Infotip/Infotip.mdx'
import MenuPage from '!babel-loader!@mdx-js/loader!./modules/Menu/MenuPage.mdx'
import TooltipPage from '!babel-loader!@mdx-js/loader!./modules/Tooltip/TooltipPage.mdx'
import Modal from '!babel-loader!@mdx-js/loader!./modules/Modal/Modal.mdx'
import InputMask from '!babel-loader!@mdx-js/loader!./modules/InputMask/InputMask.mdx'

const routes = {
  title: 'Component Library',
  path: '/components',
  component: Components,
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
      component: BreadcrumbTrail,
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
      //     path: '/structure',
      //     component: CardStructure,
      //   },
      //   {
      //     title: 'Loading State',
      //     path: '/loading',
      //     component: () => <div>TODO</div>,
      //   },
      //   {
      //     title: 'MultiState',
      //     path: '/multistate',
      //     component: () => <div>TODO</div>,
      //   },
      // ],
    },
    {
      title: 'CheckboxBank',
      path: '/checkboxbank',
    },
    {
      title: 'Collapse',
      path: '/collapse',
    },
    {
      title: 'DataGrid',
      path: '/datagrid',
      component: DataGridsPage,
      children: [
        {
          title: 'Simple',
          path: '/simple',
          component: SimpleDataGrid,
        },
        {
          title: 'Basic Search',
          path: '/basic-search',
          component: BasicSearchDataGrid,
        },
        {
          title: 'Advanced Search',
          path: '/advanced-search',
          component: AdvancedSearchDataGrid,
        },
      ],
    },
    {
      title: 'Menu',
      path: '/menu',
      component: MenuPage,
    },
    {
      title: 'Field',
      path: '/field',
    },
    {
      title: 'FormFeedback',
      path: '/formfeedback',
    },
    {
      title: 'FormGroup',
      path: '/formgroup',
    },
    {
      title: 'Forms',
      path: '/forms',
    },
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
    {
      title: 'Input',
      path: '/input',
    },
    {
      title: 'InputMask',
      path: '/InputMask',
      component: InputMask,
    },
    {
      title: 'InputGroup',
      path: '/inputgroup',
    },
    {
      title: 'InputGroupAddon',
      path: '/inputgroupaddon',
    },
    {
      title: 'JumpToTop',
      path: '/jumptotop',
    },
    {
      title: 'Label',
      path: '/label',
    },
    {
      title: 'Layouts',
      path: '/layouts',
    },
    {
      title: 'Legend',
      path: '/legend',
    },
    {
      title: 'ListGroups',
      path: '/listgroups',
    },
    {
      title: 'Logo',
      path: '/logo',
    },
    {
      title: 'Modal',
      path: '/modal',
      component: Modal,
    },
    {
      title: 'Nav',
      path: '/nav',
    },
    {
      title: 'PageHeader',
      path: '/pageheader',
    },
    {
      title: 'Popover',
      path: '/popover',
    },
    {
      title: 'RadioGroup',
      path: '/radiogroup',
    },
    {
      title: 'Select',
      path: '/select',
    },
    {
      title: 'Toggle',
      path: '/toggle',
    },
    {
      title: 'Tooltip',
      path: '/tooltip',
      component: TooltipPage,
    },
  ],
}

export default routes
