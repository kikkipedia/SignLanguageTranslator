import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Login from './components//Login'
import Translation from './components/Translation'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation';

function App() {
  return (
    
    <BrowserRouter>
      <Navigation/>
      <Container>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/translation" component={Translation} />
          <Route path="*" component={ NotFound }/>
        </Switch>
      </Container>  
    </BrowserRouter>  
    

  );
}

export default App;
