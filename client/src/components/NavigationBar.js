import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar expand="lg" className=" navbar-body mx-auto ">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold'>Filmfave</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home">Top Movies</Nav.Link>
            <Nav.Link href="#link">Top Actors</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Action</NavDropdown.Item>
              <NavDropdown.Item href="">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;