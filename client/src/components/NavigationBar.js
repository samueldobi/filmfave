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
              <NavDropdown.Item href="">
                  <Link to ="/genres/adventure" className='nav-links' >
                      Adventure
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/animation" className='nav-links' >
                      Animation
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/comedy" className='nav-links' >
                      Comedy
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/crime" className='nav-links' >
                        Crime
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/adventure" className='nav-links' >
                      Drama
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/family" className='nav-links' >
                        Family
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/fantasy" className='nav-links' >
                        Fantasy
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/horror" className='nav-links' >
                        Horror
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/mystery" className='nav-links' >
                        Mystery
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/romance" className='nav-links' >
                        Romance
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/science-fiction" className='nav-links' >
                        Science Fiction
                    </Link>
                </NavDropdown.Item>
      
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