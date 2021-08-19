import './App.css'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Login from './components//Login'
import Translation from './components/Translation'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import { getStorage } from './storage'

function App() {

  const isAuth = getStorage('auth')

  return (
    
    <BrowserRouter>
      <Navigation/>
      <Container>
        <Switch>
          <Route exact path="/">
            {isAuth ? <Redirect to="/translation" /> : <Login />}
          </Route>
          <Route path="/translation" component={Translation}/>
          <Route path="/profile" component={Profile}/>
          <Route path="*" component={ NotFound }/>
        </Switch>
      </Container>  
    </BrowserRouter>  
    

  );
}

export default App
