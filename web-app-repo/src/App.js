import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Repos from './Repos';
import "./App.css";
import RepoDetail from './RepoDetail';
 
const defaultHistory = createBrowserHistory();
 
function App({ history = defaultHistory }) {
 return (
   <Router>
     <Switch>
       <Route exact path="/" component={Repos} />
       <Route exact path="/repodetail/:repoid" component={RepoDetail} />
     </Switch>
   </Router>
 );
}
 
export default App;