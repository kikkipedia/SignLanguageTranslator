import {useState} from 'react'
import AppContainer from '../../Hoc/AppContainer'
import { useHistory } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('')
    const history = useHistory();
    const onInputChange = event => {
        setUsername(event.target.value)
    }
    const handleOnClick = () =>{
        history.push('/translation')
    }
    
    return (
        <AppContainer>
        <form className="mt-3">
            
            <h1>Lost In translation</h1>
            <p>Get Started</p>

            <div className="mb-3">
                <input id="username" type="text" 
                    placeholder="What's your name?" 
                    className="form-control"
                    onChange={onInputChange}/>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" onClick={handleOnClick}>Login</button>
        </form>
        </AppContainer>
    )
}

export default Login;