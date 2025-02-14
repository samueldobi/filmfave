import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" className=" navbar-body mx-auto   ">
      <Container className=''>
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
                      <Link to ="/genres/action/28" className='nav-links' >
                        Action
                      </Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="">
                  <Link to ="/genres/adventure/12" className='nav-links' >
                      Adventure
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/animation/16" className='nav-links' >
                      Animation
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/comedy/35" className='nav-links' >
                      Comedy
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/crime/80" className='nav-links' >
                        Crime
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/drama/18" className='nav-links' >
                      Drama
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/family/10751" className='nav-links' >
                        Family
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/fantasy/14" className='nav-links' >
                        Fantasy
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/horror/27" className='nav-links' >
                        Horror
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/mystery/9648" className='nav-links' >
                        Mystery
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/romance/10749" className='nav-links' >
                        Romance
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to ="/genres/science-fiction/878" className='nav-links' >
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