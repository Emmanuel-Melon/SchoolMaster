import React, { useState, useEffect, useContext } from 'react'
import { Card, Row, Col, Button, Form, FormGroup, FormControl, TabContainer, TabContent } from 'react-bootstrap'
import { BsPersonPlus, BsPen, BsTrash, BsPerson, BsSearch } from 'react-icons/bs'
import { FaSave, FaPrint, FaDollarSign } from 'react-icons/fa'
import AccountantLinks from './AccountantLinks'
import Chartjs from './Chartjs'
import {GlobalContext} from '../GlobalContext/GlobalContext'


import './Accountant.css'

export default function Accountant() {
    const data = useContext(GlobalContext)
    console.log(data.expernse.data)
    return (
        <>
        <AccountantLinks/>
        <Row>
            <Col md={4}>
                <Card>
                    <Chartjs />
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Chartjs />
                </Card>
            </Col>
            <Col md={4}>
                <Card className="alert-secondary">
                <Card.Body>
                    <h3>Expense entary form</h3>
                    <Form>
                        <FormGroup>
                            <FormControl type="text" placeholder="Item name"/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="qty"/>
                        </FormGroup>
                        <FormGroup>
                            <select className="form-control">
                                <option>Piece</option>
                                <option>Bag</option>
                                <option>Carton</option>
                                <option>Kg</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Price"/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Price/unit"/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Price"/>
                        </FormGroup>
                        <FormGroup>
                            <Button className="btn btn-info" type="submit"><FaSave/> Save </Button>
                        </FormGroup>
                    </Form>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
    )
}
