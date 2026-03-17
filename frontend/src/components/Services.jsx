import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Card, Col, Row} from 'react-bootstrap'
import {services} from '../data/services'

function Services() {
    return (
        <Row className="g-4">
            {services.map((service) => (
                <Col key={service.service_slug} md={6} xl={4}>
                    <Card className="service-box h-100">
                        {service.sample_image ? (
                            <Card.Img variant="top" src={service.sample_image} alt={service.service_name} className="service-card-image" />
                        ) : (
                            <div className="service-image-placeholder">Add image for {service.service_name}</div>
                        )}
                        <Card.Body className="d-flex flex-column p-4">
                            <Card.Title className="text-body-secondary mb-3 flex-grow-1">
                                {service.description}
                            </Card.Title>

                            <Card.Text a='div'>
                                <div className='my-3'>
                                    Rating
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Services