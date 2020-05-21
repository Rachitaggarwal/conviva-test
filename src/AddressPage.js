import React from 'react';
import Table from 'react-bootstrap/Table'

export default function AddressPage( props ) {

    const renderItems = () => {
        let items = props.currentAddress.map((item, index) => {
           return ( 
             <tr key={item.id} onClick={ ()=> {props.onClick(item.id)} } >
                <td> {index+1}</td>
                <td> {item.detail} {','} {item.city} {','} {item.pin} </td>
            </tr>
           );
    
       });
       return items;
    }

   return(
    <>
        { props.currentAddress.length > 0 ? <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Address</th>
                </tr>
            </thead>
            <tbody>
            {renderItems()}
            </tbody>
        </Table> : ' No Addresses yet, Please click a Customer' }
    </>
   )

}
  