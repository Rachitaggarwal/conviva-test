import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import data from './data-mock'
import ListPage from './ListPage'
import AddressPage from './AddressPage'
import {Container, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';

function App() {

  const [currentAddress, setCurrentAddress] = useState([]);

  const [addresses, setAddresses] = useState(new Map());

  const onClick = ( id ) => {
    setCurrentAddress( addresses.get(id) )
  }

  const mapAddresses = ( customers ) => {
    const m = new Map()
     customers.map( ( customer, index ) => {
      m.set( customer.id, customer.address )
    })
    setAddresses(m)
  }

  useEffect( ()=> {
    mapAddresses(data.customers)
  }, [] )

  return (
  
    <Container>
      <Row>
        <h1>
          { 'Customer Details' }
        </h1>
      </Row>
      <Row>
        <Col><ListPage customers={data.customers} onClick={onClick} /></Col>
        <Col><AddressPage currentAddress={currentAddress}/></Col>
      </Row>
    </Container>

  );
}

export default App;
