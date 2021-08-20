import { Redirect, Route } from 'react-router-dom'
import { getStorage } from '../storage'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const isLoggedIn = getStorage('auth')

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  )
}

export default PrivateRoute