import NotFound from 'components/Commons/ErrorPages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ContentOfUser } from 'views/Layout/ContentOfUser';
const MainRouterUser = () => (
    <Router >
      <Switch>
        <Route exact path="/:factoryid" component={()=> <ContentOfUser/>} />
        <Route component={()=> <NotFound/>} />
      </Switch>
    </Router>
);

export {MainRouterUser};