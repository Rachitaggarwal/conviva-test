import React from 'react';
import Table from 'react-bootstrap/Table'
import { useEffect } from 'react';

export default function ListPage( props ) {

    const renderItems = () => {
        let items = props.customers.map((item, index) => {
           return ( 
             <tr key={item.id} onClick={ ()=> {props.onClick(item.id)} } >
                <td> {index+1}</td>
                <td> {item.name} </td>
                <td> {item.age} </td>
                <td> {item.gender} </td>
            </tr>
           );
    
       });
       return items;
    }   

   return(
    <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            </tr>
        </thead>
        <tbody>
           {renderItems()}
        </tbody>
    </Table>
   )
}