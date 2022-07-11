import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import { selectUsername } from './AppSelector';
import { routeConfig } from './routeConfig';

function App() {
  const isUserLoggedIn = useSelector(selectUsername) !== null;

  const renderRoutes = (routeKey: string, index: number) => {
    const routeConfigs = routeConfig[routeKey];
    const Component = routeConfigs.component;
    const isProtected = routeConfigs.isProtected;
    if (isProtected && !isUserLoggedIn) {
      return <Route key={index} path={routeConfigs.route} element={<Navigate to='/' replace/>}/>;
    }
    return (
      <Route
        key={index}
        path={routeConfigs.route}
        element={<Component/>}
      />
    );
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {
            Object.keys(routeConfig).map(renderRoutes)
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
