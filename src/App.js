import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from './components//Login'
import Translation from './components/Translation'
import NotFound from './components/NotFound'
import AppContainer from './hoc/AppContainer';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation/>
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
