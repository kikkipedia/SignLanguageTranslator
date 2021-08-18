import './App.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Login from './components//Login'
import Translation from './components/Translation'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'
import Profile from './components/Profile'

function App() {
  return (
    
    <BrowserRouter>
      <Navigation/>
      <Container>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/translation" component={Translation} />
          <Route path="/profile" component={Profile}/>
          <Route path="*" component={ NotFound }/>
        </Switch>
      </Container>  
    </BrowserRouter>  
    

  );
}

export default App;
