import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import Loading from './loader';
import * as routeNames from "./routes.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
const AsyncHome = React.lazy(() => import("./App.js"));
const AsyncHome1 = React.lazy(() => import("./Home.js"));


ReactDOM.render(
  <Suspense fallback={<Loading />}>
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"} component={AsyncHome} />
      <Route exact path={routeNames.APP} component={AsyncHome} />
      <Route
        exact
        path={routeNames.HOME}
        component={AsyncHome1}
      />
    </Switch>
  </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);
