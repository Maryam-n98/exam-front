import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class Formchange extends Component {
    render() {
        return (
            <Form onSubmit={this.props.updatefun}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>imgurl</Form.Label>
                    <Form.Control type="text" value={this.state.item.name} onChange={this.props.this.namechange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>imgurl</Form.Label>
                    <Form.Control type="text" value={this.state.item.img} onChange={this.props.this.imgchange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>level</Form.Label>
                    <Form.Control type="text" value={this.state.item.level}  onChange={this.props.levelchange} />
                </Form.Group>
                
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        )
    }
}

// levelchange={this.levelchange}
// imgchange  ={this.imgchange}
// namechange={this.namechange}

export default Form
