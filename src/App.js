import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import BookLogo from './app/assets/img/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={BookLogo} alt='book logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
