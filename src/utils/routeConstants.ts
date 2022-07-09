declare type RouteConstants = {
  [key: string]: {
    route: string;
    isProtected: boolean;
  }
}

const routeConstants: RouteConstants = {
  home: {
    route: '/',
    isProtected: false,
  },
  dashboard: {
    route: '/dashboard',
    isProtected: true,
  },
  notFound: {
    route: '/no-found',
    isProtected: false,
  }
};

export default routeConstants;
