
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeamDetail from './Components/TeamDetail/TeamDetail';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    
      
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/team/:teamId'>
            <TeamDetail></TeamDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
      
    </Router>
    
    
  );
}

export default App;
