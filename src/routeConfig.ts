import DemoContainer from './containers/LoginContainer';
// import ProtectedContainer from './containers/ProtectedContainer';
import routeConstants from './utils/routeConstants';

declare type RouteConfigType = {
  [key: string]: {
    component: () => JSX.Element,
    route: string;
    isProtected: boolean;
  }
}

export const routeConfig: RouteConfigType = {
  home: {
    component: DemoContainer,
    ...routeConstants.home
  }
};
