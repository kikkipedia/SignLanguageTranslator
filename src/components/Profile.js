import { useEffect } from "react"

const Profile = () => {
    const userId = localStorage.getItem('userId')

    //fetches user from api
    useEffect(() => {
        try {
            fetch('http://localhost:8000/users/' + userId)
            .then(response => response.json())
            .then(data => console.log(data))
        }
        catch(err) {
            console.log(err)
        }
    },[userId])

    return(
        <div>
            Profile
        </div>
    )
}
export default Profile