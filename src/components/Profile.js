import { useState, useEffect } from "react"
import { Button, Table, Row, Col } from "react-bootstrap"
import { fetchSearches } from "../api"
import { getStorage } from "../storage"

const Profile = () => {
    const username = getStorage('username')
    const [searchArr, setSearchArr] = useState([])

     //fetches searches from api
     useEffect(() => {
        try {
            fetchSearches()
            .then(data => setSearchArr(data))
        }
        catch(err) {
            console.log("Error msg: " + err)
        }
    },[searchArr]) 

    //delete search in database
    const deleteSearch = (searchId) => {
        const requestOptions = {
            method: 'DELETE'
        }
        fetch('http://localhost:8000/search/' + searchId, requestOptions)
    }

    return(
        <div className="mt-3">
            <h4>Most recent translations:</h4>
            <Table>
                {searchArr.slice(-10).map((search) => {
                    if (search.username === username) {
                    return(
                        <Row key={search.id}>
                            <Col>
                                <Button size="sm" onClick={() => deleteSearch(search.id)}>Delete</Button>
                            </Col>
                            <Col>
                                <p>{search.text}</p>
                            </Col>
                        </Row>
                    )
                    }
                })}
            </Table>
        </div>
    )
}
export default Profile