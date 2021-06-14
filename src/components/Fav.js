import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

 class Fav extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' ,display:'inline-block' }}>
                <Card.Img variant="top" src={this.props.item.img} />
                <Card.Body>
                    <Card.Title>{this.props.item.name}</Card.Title>
                    <Card.Text>
                      {this.props.item.level}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>this.props.deletefun(this.props.index)}>Delete</Button>
                    <Button variant="primary" onClick={()=>this.props.showForm(this.props.index)}>Update</Button>

                </Card.Body>
            </Card>
        )
    }
}

export default Fav
