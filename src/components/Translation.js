import AppContainer from '../hoc/AppContainer'
import { useHistory } from "react-router-dom";

const Translation = () => {
    const history = useHistory();
    const handleLogOut = () => {
        history.push('/')
    }
    return (
        <AppContainer>
        <form className="mt-3">
            
            <h1>Lost In translation</h1>

            <div className="mb-3">
                <input id="translation" type="text" 
                    placeholder="What to translate?" 
                    className="form-control"
                    /*onChange={onInputChange}*//>
            </div>

            <button type="submit" className="btn btn-primary btn-lg">Translate</button>
            <button type="submit" className="btn btn-danger btn-lg" onClick={handleLogOut}>Log Out</button>
        </form>
        </AppContainer>
    )
}

export default Translation