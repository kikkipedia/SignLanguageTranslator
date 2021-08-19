import { InputGroup, FormControl, Button, Container, Image } from 'react-bootstrap'
import { useState } from 'react'
import { postSearch } from '../api'
import { getStorage } from '../storage'

const Translation = () => {

    const [user, setUser] = useState({
        userId: getStorage('userId'),
        username: getStorage('username')
    })
    const [searchInput, setSearchInput] = useState()
    const [imgArray, setImgArray] = useState([])

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
    }
    

    // const postSearch = (searchArr) => {
    //     console.log("in api/index.js: " + searchArr)
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ search: searchArr })
    //     }
    //     try {
    //         fetch('http://localhost:8000/users/' + user.userId, requestOptions)
    //             .then(response => response.json())
    //     }
    //     catch(err) {
    //         console.log("Error msg: " + err)
    //     }
        
    // }

    //since a broken img means white space
    const addImgError = event => {
            event.target.src="img/blank.png"
    }
    
    return (
        <div className="searchForm">
            <h4>Welcome {user.username}</h4>
            <InputGroup className="mb-10 halfSize">
                <FormControl
                    placeholder="Type text to translate"
                    aria-label="Translate"
                    aria-describedby="basic-addon2"
                    onChange={handleInputChange}
                />
                <Button variant="dark" id="button-addon2" onClick={translateWord}>Translate</Button>
            </InputGroup>
            <Container className="resultsContainer halfSize">
                <div className="resultsDiv">               
                    {imgArray.map((letter) => (
                        <Image src={letter} alt="sign" width="60px" onError={addImgError} />
                    ))}
                </div> 
                               
            </Container>           
        </div>
    )
}

export default Translation