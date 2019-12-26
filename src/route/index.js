import React, { Suspense } from 'react'
import { Router, Switch, Route } from 'dva/router'
import Frame from 'modules/layout/Frame'

function Loading() {
  return <div>Loading...</div>;
}

const PageMain = React.lazy(() => import('modules/pageMain'));
const PageWebGIS = React.lazy(() => import('modules/pageWebGIS'));

const RouterConfig = (({ history }) => (
  <Router history={history}>
    <Frame history={history}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <PageMain />
          </Route>
          <Route exact path="/webgis">
            <PageWebGIS />
          </Route>
        </Switch>
      </Suspense>
    </Frame>
  </Router>
));

export default RouterConfig;
