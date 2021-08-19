import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { fetchUser } from "../api"

const Profile = () => {
    const [user, setUser] = useState()
    const [searchArray, setSearchArray] = useState([])
    const userId = localStorage.getItem('userId')

     //fetches user from api
     useEffect(() => {
        try {
            fetchUser(userId)
            .then(data => {
                setUser(data)
                const arr = data.search
                setSearchArray(arr)
            })
        }
        catch(err) {
            console.log("Error msg: " + err)
        }
    },[userId])

    //clear search in database
    //TODO
    const clearSearch = () => {

    }

    //TODO -- Show only last 10 searches

    //TODO -- If search = null
    return(
        <div className="mt-3">
            <h4>Most recent translations:</h4>
            {/* {searchArray.map((search) => (
                <li>{search}</li>
            ))}
            <Button onClick={clearSearch}>Clear search history</Button> */}
        </div>
    )
}
export default Profile