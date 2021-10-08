import { Route, Switch, Redirect } from "react-router";
import Dashboard from 'pages/Dashboard';
import Applications from 'pages/Applications';
import Application from 'pages/Application';
import Flows from 'pages/Flows';
import Explore from 'pages/Explore';
import * as URLS from 'config/urls';

export default (
  <Switch>
    <Route path={URLS.DASHBOARD}>
      <Dashboard />
    </Route>

    <Route path={URLS.FLOWS}>
      <Flows />
    </Route>

    <Route path={URLS.APPS}>
      <Applications />
    </Route>

    <Route path={URLS.EXPLORE}>
      <Explore />
    </Route>

    <Route path={URLS.APP_PATH_PATTERN}>
      <Application />
    </Route>

    <Route exact path="/">
      <Redirect to={URLS.DASHBOARD} />
    </Route>

    <Route>
      404
    </Route>
  </Switch>
);
