import { InputGroup, FormControl, Button, Container, Image } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const Translation = () => {

    const [userId, setUserId] = useState(localStorage.getItem('userId'))
    const [username, setUsername] = useState()
    const [searchInput, setSearchInput] = useState()
    const [imgArray, setImgArray] = useState([])
    const [searchArr, setSearchArr] = useState(localStorage.getItem('searchArr'))

    useEffect(() => {
        fetch('http://localhost:8000/users/' + userId)
        .then(response => response.json())
        .then(data => {
            setUsername(data.username)
            localStorage.setItem('searchArr', data.search)
        })
    })

    //handle user input
    const handleInputChange = event => {
        setSearchInput(event.target.value.toLowerCase())
    }

    //translate submitted text
    const translateWord = () => {
        //save search string to database
        saveSearch()
        //array of char from search input
        const arr = [...searchInput]
        //empty imgArray
        setImgArray([])
        //sets img src url in the array
        for(let i = 0; i < arr.length; i++) {
            setImgArray(imgArray => [...imgArray, 'img/' + arr[i] + '.png'])           
        }
    }

    //TODO! not working
    //store search in database search array
    const saveSearch = () => {
        const updateSearch = [
            ...searchArr,
            searchInput
        ]
        setSearchArr(updateSearch)
    }

    //since a broken img means white space
    const addImgError = event => {
            event.target.src="img/blank.png"
    }
    
    return (
        <div className="searchForm">
            <h4>Welcome {username}</h4>
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