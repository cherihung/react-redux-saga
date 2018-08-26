import App from './App';
import Posts from './features/Posts';

export const AppRoutes = [
  {
    path: '/',
    component: App,
    exact: true,
  },
  {
    path: '/posts',
    component: Posts,
    exact: true,
  },
];

export default AppRoutes;
