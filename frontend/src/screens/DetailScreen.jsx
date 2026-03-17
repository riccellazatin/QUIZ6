import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Card, Button} from 'react-bootstrap'
import {services} from '../data/services'
import Rating from '../components/Rating'
import PaymentScreen from './PaymentScreen'

function DetailScreen() {
  return (
    <>
        <div>
            <Row>
                <Col md={6}>
                    <img src={services.image} alt={services.service_name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>{services.service_name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ${services.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {services.description}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating color={'3f8e825'} value={services.rating} text={`${services.numreviews} reviews`}/>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price</Col>
                                    <Col><strong>${services.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button as={Link} to={`/payment`} className='btn-block' type='button' disabled={services.avail === 0}>Book Our Service</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default DetailScreen