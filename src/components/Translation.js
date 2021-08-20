import { InputGroup, FormControl, Button, Container, Image } from 'react-bootstrap'
import { Redirect } from 'react-router'
import { useEffect, useState } from 'react'
import { postSearch } from '../api'
import { getStorage } from '../storage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignLanguage } from '@fortawesome/free-solid-svg-icons'

const Translation = () => {

    const [user, setUser] = useState({
        userId: getStorage('userId'),
        username: getStorage('username')
    })
    const [searchInput, setSearchInput] = useState('')
    const [imgArray, setImgArray] = useState([])

    //check if logged in
    useEffect(() => {
        if(!user.username || user.username === '') {
            <Redirect to="/login"></Redirect>
        }
    },[user.username])

    //handle user input
    const handleInputChange = event => {
        setSearchInput(event.target.value.toLowerCase())
    }

    //translate submitted text
    const translateWord = () => {
        //creates array of char from search input
        const arr = [...searchInput]
        //empty imgArray for next search
        setImgArray([])
        //sets img src url in the array
        for(let i = 0; i < arr.length; i++) {
            setImgArray(imgArray => [...imgArray, 'img/' + arr[i] + '.png'])           
        }
        //save search string to database
        saveSearch()
    }

    //store search in database
    const saveSearch = () => {
        postSearch(user.username, searchInput)
        setSearchInput('')
    }

    //since a broken img means white space
    const addImgError = event => {
            event.target.src="img/blank.png"
    }
    
    return (
        <div className="searchForm">
            <h4>Welcome {user.username}!</h4>
            <InputGroup className="mb-10 halfSize">
                <FormControl
                    placeholder="Type text to translate"
                    aria-label="Translate"
                    aria-describedby="basic-addon2"
                    onChange={handleInputChange}
                    value={searchInput}
                />
                <Button variant="dark" id="button-addon2" onClick={translateWord}><FontAwesomeIcon icon={faSignLanguage}/></Button>
            </InputGroup>
            <Container className="resultsContainer halfSize">
                <div className="resultsDiv">               
                    {imgArray.map((letter) => (
                        <Image src={letter} alt="sign" width="50px" onError={addImgError} />
                    ))}
                </div> 
                               
            </Container>           
        </div>
    )
}

export default Translation