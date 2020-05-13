import { CircularProgress } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PageNotFound from "pages/PageNotFound";

function retry(fn: Function, retriesLeft = 1, interval = 1000) {
  return new Promise<{ default: React.ComponentType<any> }>((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error: Error) => {
        setTimeout(() => {
          if (retriesLeft <= 0) {
            reject(error);
            return;
          }

          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

const Home = lazy(() => retry(() => import("pages/Home")));

export default function Routes() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        {/* ---- Redirects ---- */}
        <Redirect from="/index.html" to="/" />

        {/* Pages */}
        <Route path="/" exact render={() => <Home />} />

        {/* ---- 404 ---- */}
        <Route render={() => <PageNotFound />} />
      </Switch>
    </Suspense>
  );
}
