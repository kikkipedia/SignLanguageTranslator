import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

const Profile = () => {
    const [searchArray, setSearchArray] = useState([])
    const userId = localStorage.getItem('userId')

    //TODO -- Fetch only last 10
     //fetches user from api
     useEffect(() => {
        try {
            fetch('http://localhost:8000/users/' + userId)
            .then(response => response.json())
            .then(data => {
                const arr = data.search
                setSearchArray(arr)
            })
        }
        catch(err) {
            console.log("Error msg: " + err)
        }
    })

    //clear search in database
    //TODO
    const clearSearch = () => {

    }

    return(
        <div className="mt-3">
            <h4>Most recent translations:</h4>
            {searchArray.map((search) => (
                <li>{search}</li>
            ))}
            <Button onClick={clearSearch}>Clear history</Button>
        </div>
    )
}
export default Profile