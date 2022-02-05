import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header';

const Feeds = React.lazy(() => {
  return import('./components/Feeds/Feeds');
});

function App() {
  const classes = useStyles();

  let routes = null;

  routes = (
    <Switch>
      <Route path='/feeds' render={(props) => <Feeds {...props} />}></Route>
      <Redirect to='/feeds' />
    </Switch>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.drawerHeader} />
      <Header />
      <main className={classes.content}>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default withRouter(App);
