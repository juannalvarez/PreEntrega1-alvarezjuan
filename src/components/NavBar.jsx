import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <>
            <Navbar className='navBarStyle' bg='black' data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand href='#inicio'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='titulo'> INTRÉPIDA </span><span className='subtitulo'>Vinoteca</span></Navbar.Brand>
                </Container>
                
                <Container>
                    <Nav className='me-auto nav-link'>
                        <Nav.Link href='' className='active'>INICIO</Nav.Link>
                        <Nav.Link href=''>PRODUCTOS</Nav.Link>
                        <Nav.Link href='#carrito'>CARRITO</Nav.Link>
                        <CartWidget/>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;

