import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Form, Row, Col } from 'react-bootstrap'
import { fetchUsers, postUser } from '../api'
import { setStorage } from '../storage'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import "animate.css"

const Login = () => {
    const [username, setUsername] = useState()
    const [users, setUsers] = useState([])
    const history = useHistory()

    //fetch users from database
    useEffect(() => {
        fetchUsers()
        .then(data => setUsers(data)) 
        //checks if already logged in - and if so go to translate
        if(localStorage.getItem('auth')){
          history.push('/translate')
        }
    })

    const handleInputChange = event => {
        setUsername(event.target.value)
    }

    const handleLogin = () => {       
        //check for whitespace
        if (username !== '') {
            postUsername()
            history.push('/translate')
        }
        else {
            alert("Please enter a valid username")
        }           
    }

    const postUsername = () => {
        //checks if user already exists in database
        //if not - post to database
        let user = users.find(el => el.username === username)
        if (user === undefined) {
            postUser(username)
            .then(data => {
            const id = data.id
            //set local storage
            setStorage('userId', id)
            setStorage('auth', true)
            setStorage('username', username)
        })
        }   
        else {
            //user already in database - set local storage
            setStorage('userId', user.id)
            setStorage('username', user.username)
            setStorage('auth', true)
        }
    }
        
    return (
        <div className="searchForm">
            <Form className="halfSize">
                <Row>
                    <h2 className="animate__animated animate__backInDown">WELCOME</h2>
                    <p className="smallText">Please login to use the translator</p>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mt-3">
                            <Form.Control type="text" placeholder="Enter username" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <button  className="mt-3 btn-icon-big" onClick={handleLogin}><FontAwesomeIcon icon={faSignInAlt}/></button>
                    </Col>                
                </Row>
            </Form>
        </div>
        
    )
}

export default Login