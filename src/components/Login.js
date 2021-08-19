import {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { fetchUsers, postUser } from '../api';
import { setStorage } from '../storage';

const Login = () => {
    const [username, setUsername] = useState()
    const [users, setUsers] = useState([])
    const history = useHistory()

   useEffect(() => {
        fetchUsers()
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
            //checks if user already exists in database
            //if not - post to database
            let user = users.find(el => el.username === username)
            if (user === undefined) {
                posttoDatabase()
            }
            else {
                //set local storage
                setStorage('userId', user.id)
                setStorage('isAuth', true)
                setStorage('username', user.username)
                history.push('/translation')
            }
        }           
    }

    const posttoDatabase = () => {        
        try {
            postUser(username)
            .then(data => {
                const id = data.id
                //set local storage
                setStorage('userId', id)
                setStorage('isAuth', true)
                setStorage('username', username)
                history.push('/translation')
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
                    <h4>Login to use the translator</h4>
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