import './App.css';
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
} from 'react-router-dom'
import Login from './Components/Login/Login'
import Translation from './Components/Translation/Translation'
import NotFound from './Components/NotFound/NotFound'
import AppContainer from './Hoc/AppContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <AppContainer>
          <h4>
          </h4>
        </AppContainer>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/translation" exact component={Translation} />
          <Route path="*" component={ NotFound }/>
        </Switch>
      </div>   
    </BrowserRouter>  
  );
}

export default App;
