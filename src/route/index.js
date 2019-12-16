import React, { Suspense } from 'react'
import { Router, Switch, Route } from 'dva/router'
import Frame from 'modules/layout/Frame'

function Loading() {
  return <div>Loading...</div>;
}

const PageMain = React.lazy(() => import('modules/pageMain'));

const RouterConfig = (({ history }) => (
  <Router history={history}>
    <Suspense fallback={<Loading />}>
      <Frame>
        <Switch>
          <Route path="/" >
            <PageMain />
          </Route>
        </Switch>
      </Frame>
    </Suspense>
  </Router>
));

export default RouterConfig;
