import React, { Component } from 'react'
import {Consumer} from '../../context'
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup'

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        error: {},
    }
    changeContact = (e) => {
        this.setState({[e.target.name]: e.target.value,});
    }

    onSubmit = (dispatch, e) => {
        const {name, email, phone} = this.state;
        e.preventDefault();

        if(name === '')
        {
            this.setState({error: {name: "Name is Required."}});
            return;
        }
        if(phone === '')
        {
            this.setState({error: {phone: "Phone is Required."}});
            return;
        }
        if(email === '')
        {
            this.setState({error: {email: "Email is Required."}});
            return;
        }

        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone,
        }
        dispatch({ type: 'ADD_CONTACT', payload: newContact});
        this.setState(
            {
                name: '',
                email: '',
                phone: '',
                error: {},
            }
        )
    }

    render() {
        const {error, name, email, phone} = this.state;

        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card card-body mb-3">
                        <div className="card-header">Add a Contact</div>
                        <div className="card-body">
                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                            <TextInputGroup name='name' placeholder='Enter Name' label='Name:' onChange={this.changeContact} value={name} error={error.name}/>
                            <TextInputGroup name='phone' placeholder='Enter Phone' label='Phone:' onChange={this.changeContact} value={phone} error={error.phone}/>
                            <TextInputGroup name='email' placeholder='Enter Email' label='Email:' type="email" onChange={this.changeContact} value={email} error={error.email}/>
                            <input
                            type="submit"
                            value="Add Contact"
                            className="btn btn-light btn-block"
                            />
                        </form>
                </div>
            </div>
                    )
                }}
            </Consumer>
        )
    }
}
