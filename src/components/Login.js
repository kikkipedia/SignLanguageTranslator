import {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { fetchUsers, postUser } from '../api'
import { setStorage } from '../storage'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

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
                setStorage('auth', true)
            }
            else {
                //set local storage
                setStorage('userId', user.id)
                setStorage('username', user.username)
                setStorage('auth', true)
                history.push('/')
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
                setStorage('auth', true)
                setStorage('username', username)
                history.push('/')
            })
        }
        catch (err) {
            console.log("Error msg: " + err)
        }      
    }
        
    return (
        <div className="searchForm">
            <Form className="halfSize">
                <Row>
                    <h4>Login to use the translator</h4>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mt-3">
                            <Form.Control type="text" placeholder="Enter username" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Button variant="black" className="mt-3" onClick={handleLogin}><FontAwesomeIcon icon={faSignInAlt}/></Button>
                    </Col>                
                </Row>
            </Form>
        </div>
        
    )
}

export default Login