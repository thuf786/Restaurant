import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Restview() {
  const {id} = useParams();
  const allRestaurant = useSelector(state =>
    state.restaurantSlice.allRestaurant)
    const selectedRestaurant = allRestaurant?.filter(item=>item.id == id)
    console.log(selectedRestaurant);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
   <>
   <Row className='mt-5 mb-5'>
    <Col md={1}>

    </Col>
    <Col md={3}>
        <img
        className='rounded'
        width={'100%'} 
        src={selectedRestaurant[0].photograph} alt="" />
    </Col>
    <Col md={7} className='px-7'>
        <hr />
        <h4 className='text-center'>
            <span className='text-warning'>Restaurant </span>Details
        </h4>
        <hr />
        <ListGroup>
      <ListGroup.Item className='text-center p-3'>Restaurant Name:{selectedRestaurant[0].name}</ListGroup.Item>
      <ListGroup.Item>Neighborhood:<span className='ms-3 text-primary'>{selectedRestaurant[0].neighborhood}</span></ListGroup.Item>
      <ListGroup.Item>Cuisine Type:<span className='ms-3 text-primary'>{selectedRestaurant[0].cuisine_type}</span></ListGroup.Item>
      <ListGroup.Item>Address:<span className='ms-3 text-primary'>{selectedRestaurant[0].address}</span></ListGroup.Item>
      <ListGroup.Item className='text-center p-3 mb-2'>
        <button className='btn btn-warning'  onClick={handleShow}>Operating Hours</button>
        <RestReview selectedRestaurant={selectedRestaurant[0]}/>
      </ListGroup.Item>
    </ListGroup>
    </Col>
    <Col md={1}></Col>
   </Row>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
      <ListGroup.Item>Monday: <span className='text-primary ms-3'>{selectedRestaurant[0].operating_hours.Monday}</span></ListGroup.Item>
      <ListGroup.Item>Tuesday:  <span className='text-primary ms-3'>{selectedRestaurant[0].operating_hours.Tuesday}</span></ListGroup.Item>
      <ListGroup.Item>Wednesday: <span className='text-primary ms-3'>{selectedRestaurant[0].operating_hours.Wednesday}</span></ListGroup.Item>
      <ListGroup.Item>Thursday: <span className='text-primary ms-3'>{selectedRestaurant[0].operating_hours.Thursday}</span></ListGroup.Item>
      <ListGroup.Item>Friday:  <span className='text-primary ms-3'>{selectedRestaurant[0].operating_hours.Friday}</span></ListGroup.Item>
      <ListGroup.Item>Saturday:  <span className='text-primary ms-3'>{selectedRestaurant[0].operating_hours.Saturday}</span></ListGroup.Item>
      <ListGroup.Item>Sunday:  <span className='text-primary ms-3'>{selectedRestaurant[0].operating_hours.Sunday}</span></ListGroup.Item>
    </ListGroup></Modal.Body>
      </Modal>
      {/* <div className='d-flex justify-content-center align-items-center'>
      
      </div> */}

   </>
  )
}

export default Restview