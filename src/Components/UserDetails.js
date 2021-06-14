import React, { useEffect, useState } from 'react'
import './userdetails.css';
import '../App.css';
import { Button ,Card,ListGroup, ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
const UserDetails = (props) => {

    const userFound= props.userList.find((a)=>a.id == props.match.params.id) 
    return (
        <div className="App">
            <div className="arriere">
                <Card className="cards" style={{ width: '25rem' }}>
                    <Card.Img style={{width:'100px', height:'100px', marginLeft:' auto',marginRight: 'auto', marginTop:'50px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYKMCx6t9-CHWuU3Ox8tt-MMcLoajIflI2irU9xBWjbVHQkL8jHU67SjB7PXpYMhm93U&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Name: {userFound.name}</Card.Title>
                        <Card.Text>Username: {userFound.username}</Card.Text>
                        <Card.Text>Email: {userFound.email}</Card.Text>
                        <Card.Text>Phone: {userFound.phone}</Card.Text>
                        <Card.Text>Website: {userFound.website}</Card.Text>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroupItem>Adresse city: {userFound.address.city}</ListGroupItem>
                        <ListGroupItem>Adresse Street: {userFound.address.street}</ListGroupItem>
                        <ListGroupItem>Adresse Suite: {userFound.address.suite}</ListGroupItem>
                        <ListGroupItem>Adresse zipcode: {userFound.address.zipcode}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Link  to='/'> <Button variant="danger">Return to user list</Button> </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default UserDetails
