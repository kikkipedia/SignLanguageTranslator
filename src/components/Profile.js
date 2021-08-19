import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
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
    },[]) 

    //delete search in database
    //TODO
    const deleteSearch = () => {

    }

    //TODO -- Show only last 10 searches

    return(
        <div className="mt-3">
            <h4>Most recent translations:</h4>
            {/* {searchArr.map((search) => (
                <li>{search.text}</li>
            ))} */}
            {searchArr.map((search, index) => {
                if (search.username === username) {
                    return (<li key={'Key-'+index}>
                        {search.text}
                        </li>
                    )}
            }
            )}
        </div>
    )
}
export default Profile