import { useState, useEffect } from "react"

const Profile = () => {
    const [searchArray, setSearchArray] = useState([])
    const userId = localStorage.getItem('userId')

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

    return(
        <div className="mt-3">
            <h4>Most recent translations:</h4>
            {searchArray.map((search) => (
                <li>{search}</li>
            ))}
        </div>
    )
}
export default Profile