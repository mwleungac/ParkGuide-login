import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class Products extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Please select parking lots</h2>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item>Parking slot 1</ListGroup.Item>
                            <ListGroup.Item>Parking slot 2</ListGroup.Item>
                            <ListGroup.Item>Parking slot 3</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Products;