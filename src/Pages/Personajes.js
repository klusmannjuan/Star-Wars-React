import Navbar from 'react-bootstrap/Navbar';
import Logo2 from '../assets/img/Logo2.png';
import Nav from 'react-bootstrap/Nav';

function NavbarApp() {
    return (
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={Logo2}
                width="60"
                height="60"
                className="d-inline-block align-top"
              />{' '}
              
              Star Wars
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Personajes</Nav.Link>
              <Nav.Link href="#link">Planetas</Nav.Link>
                
            </Nav>
          </Container>
        </Navbar>
    );
  }
  
  export default NavbarApp;