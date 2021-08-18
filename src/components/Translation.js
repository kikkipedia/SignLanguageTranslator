import { InputGroup, FormControl, Button, Container, Image } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Translation = () => {

    const [searchInput, setSearchInput] = useState()
    const [imgArray, setImgArray] = useState([])
    // TODO save searches array!
    const history = useHistory()

    //fetches from local storage
    useEffect(() => {
        
    }, [])

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

    //TODO!
    //store search in database
    const saveSearch = () => {
        console.log("store search words: " + searchInput)
    }

    //since a broken img means white space
    const addImgError = event => {
            event.target.src="img/blank.png"
    }
    
    return (
        <div className="searchForm">
            <h4>Welcome props.username</h4>
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