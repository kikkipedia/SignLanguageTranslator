import { Nav, Navbar } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const Navigation = () => {

    const history = useHistory();
    const handleLogOut = () => {
        console.log("logging out")
        //set username to ''
        history.push('/')
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">LostInTranslation</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/translation">Translate</Nav.Link>
                    <Nav.Link href="">Profile</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
export default Navigation