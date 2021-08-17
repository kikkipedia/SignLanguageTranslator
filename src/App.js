import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from './components//Login'
import Translation from './components/Translation'
import NotFound from './components/NotFound'
import AppContainer from './hoc/AppContainer';

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
