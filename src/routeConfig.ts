import DashboardContainer from './containers/DashboardContainer';
import LoginContainer from './containers/LoginContainer';
import routeConstants from './utils/routeConstants';

declare type RouteConfigType = {
  [key: string]: {
    component: () => JSX.Element,
    route: string;
    isProtected: boolean;
  }
}

export const routeConfig: RouteConfigType = {
  login: {
    component: LoginContainer,
    ...routeConstants.login
  },
  dashboard: {
    component: DashboardContainer,
    ...routeConstants.dashboard
  }
};
