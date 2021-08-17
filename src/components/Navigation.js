import { Nav, Navbar } from "react-bootstrap"

const Navigation = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">LostInTranslation</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/translation">Translate</Nav.Link>
                    <Nav.Link href="">Profile</Nav.Link>
                    <Nav.Link href="">Login/Logout</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
export default Navigation