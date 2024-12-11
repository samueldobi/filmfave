import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" className=" navbar-body mx-auto ">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold'>
          <Link to ="/" className='nav-links'>
            Filmfave
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link >
              <Link to ="/topmovies" className='nav-links'>
                  Top Movies
              </Link>
              </Nav.Link >
            <Nav.Link>
              <Link to ="/topseries" className='nav-links' >
              Top Series
              </Link>
              </Nav.Link>
            <NavDropdown title="Genres" id="basic-nav-dropdown">
              <NavDropdown.Item href="">
                  <Link to ="/genres/action" className='nav-links' >
                    Action
                  </Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="">Adventure</NavDropdown.Item>
              <NavDropdown.Item href="">Animation</NavDropdown.Item>
              <NavDropdown.Item href="">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="">Crime</NavDropdown.Item>
              <NavDropdown.Item href="">Drama</NavDropdown.Item>
              <NavDropdown.Item href="">Family</NavDropdown.Item>
              <NavDropdown.Item href="">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="">Horror</NavDropdown.Item>
              <NavDropdown.Item href="">Mystery</NavDropdown.Item>
              <NavDropdown.Item href="">Romance</NavDropdown.Item>
              <NavDropdown.Item href="">Science Fiction</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;