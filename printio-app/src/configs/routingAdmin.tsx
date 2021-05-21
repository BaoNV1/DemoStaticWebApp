import NotFound from 'components/Commons/ErrorPages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ContentOfAdmin } from 'views/Layout/ContentOfAdmin';
const MainRouterAdmin = () => (
    <Router >
      <Switch>
        <Route exact path="/:factoryid" component={()=> <ContentOfAdmin/>} />
        <Route component={()=> <NotFound/>} />
      </Switch>
    </Router>
);

export {MainRouterAdmin};