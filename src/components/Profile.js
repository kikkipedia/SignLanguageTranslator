import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react"
import { Row } from "react-bootstrap"
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
        <div className="mt-3 searchForm left">
            <h4>Your recent translations:</h4>
            <br/>
                {searchArr.slice(-10).map((search) => {
                    if (search.username === username) {
                    return(
                        <Row key={search.id}>
                                <p><button className="btn-icon" size="sm" onClick={() => deleteSearch(search.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>{search.text}</p>
                        </Row>
                    )
                    }
                })}
        </div>
    )
}
export default Profile