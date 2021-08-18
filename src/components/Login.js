import {useState} from 'react'
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap'

const Login = () => {
    const [username, setUsername] = useState()
    const history = useHistory()

    const handleInputChange = event => {
        setUsername(event.target.value)
    }
    const handleLogin = () =>{
        //check for no spaces in username
        //post to db
        postUser()
        history.push('/translation')
    }

    const postUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username })
        }
        try {
            fetch('http://localhost:8000/users', requestOptions)
            .then(response => response.json())
        }
        catch (err) {
            console.log("Error msg: " + err)
        }      
    }
    
    
    return (
        <div className="searchForm">
            <Form className="mt-3 halfSize">
            <Row className="align-items-center">
                <h4>Login to translate</h4>
            </Row>
            <Row>
                <Col className="md-10">
                    <Form.Group className="mt-3">
                        <Form.Control type="text" placeholder="Enter username" onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                <Col className="md-2">
                    <Button className="mt-3" variant="primary" onClick={handleLogin}>Login</Button>
                </Col>
                
                </Row>
            </Form>
        </div>
        
    )
}

export default Login