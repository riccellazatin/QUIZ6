import React from 'react'
import {Container} from 'react-bootstrap'
import Services from '../components/Services'

function HomeScreen() {
  return (
    <>
    <div className="service-page py-5">
      <Container>
        <div className="service-box mb-4 p-4">
          <h1 className="mb-2">Security System & Low-Voltage Services</h1>
          <p className="mb-0 text-body-secondary">
            Select a service to view the full details.
          </p>
        </div>

        <Services />
      </Container>
    </div>
    </>
  )
}

export default HomeScreen