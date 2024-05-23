import React from 'react'
import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch = useDispatch();
  return (
    <>
    <Link to={'/'} style={{textDecoration:"none"}}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         <img
         height={'50px'}
         width={'100px'} 
         src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1e8feb109720503.5fda2a433c12d.jpg" alt="" />
         <Navbar.Brand href='#home' style={{fontSize:"50px" , fontFamily:"Brush Script MT"}}>പലാരം</Navbar.Brand>
         <input
         onChange={(e)=>dispatch(search(e.target.value))} 
         type="text" className='form-control w-25' placeholder='searchByNeighbourHood' />
        </Container>
      </Navbar>
      </Link>
    </>
  )
}

export default Header