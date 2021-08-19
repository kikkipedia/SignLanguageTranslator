import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h4>
                Hey, you seem lost!
            </h4>
            <p>This page does not exist</p>
            <Link to="/">Take me home</Link>
        </div>
    )
}

export default NotFound