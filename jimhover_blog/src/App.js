import './App.css';
import Head from './Head';
import Foot from './Foot';
import { Route, Switch, useHistory } from "react-router-dom";
import BlogList from './BlogList';



function App(props) {
  const history = useHistory();
  function sayHello(path) {
    history.push(path);
  };
  return (
    <div className="App">
      <Switch location={props.location}>
      <Route exact  path='/'>
        <Head sayHello={sayHello} />
        <h1>hello jimhover</h1>
        <img src='index.png'></img>
        <Foot />
      </Route>
      <Route exact  path={'/blog-list'} component={BlogList} />
      </Switch>
    </div>

  );
}

export default App;
