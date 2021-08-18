import {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap'

const Login = () => {
    const [username, setUsername] = useState()
    const [users, setUsers] = useState([])
    const history = useHistory()

   useEffect(() => {
        fetch("http://localhost:8000/users")
        .then(response => response.json())
        .then(data => setUsers(data))        
    },[])

    const handleInputChange = event => {
        setUsername(event.target.value)
    }
    const handleLogin = () => {
        //check for whitespace
        if (/\s/.test(username)) {
            alert("No whitespace allowed in username!")
        }
        else {
            console.log(users)
            for(let i = 0; i <users.length; i++) {
                if(users[i].username === username) {
                    localStorage.setItem('userId', users[i].id)
                }
                else {
                    //post new user to database
                    postUser()
                }
            }
            //is now authenticated
            localStorage.setItem('isAuth', true)
            history.push('/translation')
        }           
    }

    const postUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, search: [] })
        }
        try {
            fetch('http://localhost:8000/users', requestOptions)
            .then(response => response.json())
            .then(data => {
                const id = data.id
                //set local storage
                localStorage.setItem('userId', id)
            })
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