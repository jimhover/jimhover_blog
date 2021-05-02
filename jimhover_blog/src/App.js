import './App.css';
import Head from './Head';
import Foot from './Foot';
import { Route, Switch, useHistory } from "react-router-dom";
import BlogList from './BlogList';
import Login from './Login';
import AddBlog from './AddBlog';


function App(props) {
  const history = useHistory();
  function loadMain(path) {
    console.log('direact to path:'+path);
    history.push(path);
  };
  return (
    <div className="App">
      <Head loadMain={loadMain} />
      <Switch location={props.location}>
      <Route exact  path={'/home'}   component={Login}  />
      <Route exact  path={'/blog-list'}  component={BlogList} />
      <Route exact path={'/add-blog'} component={AddBlog} />
      </Switch>
      <Foot />
    </div>

  );
}

export default App;
