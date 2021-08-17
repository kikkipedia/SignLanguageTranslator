import { InputGroup, FormControl, Button, Container, Image } from 'react-bootstrap'
import { useState } from 'react'

const Translation = () => {

    const [searchInput, setSearchInput] = useState()
    const [imgArray, setImgArray] = useState([])

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
        //sets img src in array
        for(let i = 0; i < arr.length; i++) {
            setImgArray(imgArray => [...imgArray, 'signs/' + arr[i] + '.png'])           
        }
    }

    //TODO!
    //store search in database
    const saveSearch = () => {
        console.log("store search words: " + searchInput)
    }

    //if broken img/space
    const addImgError = event => {
            event.target.src="signs/blank.png"
    }
    
    return (
        <div className="searchForm">
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
            <p>American sign language</p>
                <div className="resultsDiv">               
                    {imgArray.map((letter) => (
                        <Image src={letter} alt="sign" width="80px" onError={addImgError} />
                    ))}
                </div> 
                               
            </Container>           
        </div>
    )
}

export default Translation