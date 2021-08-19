import { useState, useEffect } from "react"
import { Button, Table, Row, Col } from "react-bootstrap"
import { fetchSearches } from "../api"
import { getStorage } from "../storage"
import { deleteSearch } from "../api"

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
        //rerender?
    }

    //TODO -- Show only last 10 searches

    return(
        <div className="mt-3">
            <h4>Most recent translations:</h4>
            <Table>
                {searchArr.map((search) => {
                    if (search.username === username) {
                    return(
                        <Row key={search.id}>
                            <Col>
                                <p>{search.text}</p>
                            </Col>
                            <Col>
                                <Button size="sm" variant="secondary" onClick={() => deleteSearch(search.id)}>Delete</Button>
                            </Col>
                        </Row>
                    )
                    }
                })}
            </Table>
            

            {/* <Row>
                <Col>
                    {searchArr.map((search, index) => {
                        if (search.username === username) {
                            return (<p key={'Key-'+index}>
                                {search.text}
                                </p>
                            )}
                    }
                    )}
                </Col>
                <Col>
                    {searchArr.map((search, index) => {
                        if (search.username === username) {
                            return (<p><Button value={search.id}>Delete</Button></p>
                            )}
                    }
                    )} 
                </Col>
            </Row> */}
        </div>
    )
}
export default Profile