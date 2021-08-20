import { Nav, Navbar, Container } from "react-bootstrap"
import { useHistory } from "react-router"

const Navigation = () => {

    const history = useHistory()

    const handleLogOut = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">LostInTranslation</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Translate</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>                  
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navigation