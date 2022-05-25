import React from "react";
import { Link } from 'react-router-dom';
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{ height: "80" }}>
      <Container>
        <Navbar.Brand href='#home'>
          <Link href='/'>Shopping Cart</Link>
        </Navbar.Brand>
          <Navbar.Text className='Search'>
            <FormControl
              style={{ width: 500 }}
              placeholder='Search a product'
              className='m-auto'
            />
          </Navbar.Text>
          <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
            <FaShoppingCart color="wight" fontSize="25px"></FaShoppingCart>
              <Badge>{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth: 370}}>
              <span style={{padding:10}}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
