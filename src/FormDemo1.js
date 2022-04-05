import React, { Component } from 'react'
import alertify from 'alertifyjs';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export default class FormDemo1 extends Component {
    state = {
        email: '',
        password: '',
        city: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }
    handleSubmit = (event) => {
        event.preventDefault();

        alertify.success('Form Submitted');
    }
    render() {
        return (
            <div>
                <Form onsubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input type='email' name='email' id='email' placeholder='Enter email' value={this.state.email} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password' placeholder='Enter password' value={this.state.password} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='description'>Description</Label>
                        <Input type='textarea' name='description' id='description' placeholder='Enter description' value={this.state.description} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='city'>City</Label>
                        <Input type='select' name='city' id='city' onChange={this.handleChange} >
                            <option>İstanbul</option>
                            <option>Ankara</option>
                            <option>İzmir</option>
                            <option>Konya</option>
                        </Input>
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Save</Button>
                </Form>
            </div>
        )
    }
}
