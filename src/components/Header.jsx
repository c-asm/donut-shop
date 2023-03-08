import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../assets/img/logo.png';

import '../css/Header.css';


export default function Header() {

	return (
		<Navbar expand='md' className='navbar-root' variant="light">
			<Container>
				<Navbar.Brand href="/">
					<img alt='logo' src={logo} />
					<span>Donut Shop</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-collapse-id" />
				<Navbar.Collapse id="navbar-collapse-id">
					<Nav className="me-auto">
						<Nav.Link className='nv-link' href="/products">Products</Nav.Link>
						<Nav.Link className='nv-link' href="/about">About</Nav.Link>
						{/* Above links are just to fill navbar, no routing is implimented in this project */}
					</Nav>
        		</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}