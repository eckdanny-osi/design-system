import AlertsPage from './views/AlertsPage';
import AvatarsPage from './views/AvatarsPage';
import BadgesPage from './views/BadgesPage';
import ButtonsPage from './views/ButtonsPage';
import TogglesPage from './views/TogglesPage';
import BreadcrumbsPage from './views/BreadcrumbsPage';
import CardsPage from './views/CardsPage';
import IconsPage from './views/IconsPage';
import ModalsPage from './views/ModalsPage';

export default [
  { title: 'Alerts', slug: 'AlertsPage', component: AlertsPage },
  { title: 'Avatars', slug: 'AvatarsPage', component: AvatarsPage },
  { title: 'Badges', slug: 'BadgesPage', component: BadgesPage },
  { title: 'Buttons', slug: 'ButtonsPage', component: ButtonsPage },
  { title: 'Toggles', slug: 'toggles', component: TogglesPage },
  { title: 'Breadcrumbs', slug: 'breadcrumbs', component: BreadcrumbsPage },
  { title: 'Cards', slug: 'CardsPage', component: CardsPage },
  { title: 'Icons', slug: 'IconsPage', component: IconsPage },
  { title: 'Modals', slug: 'modals', component: ModalsPage },
];
