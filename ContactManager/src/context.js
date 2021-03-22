import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
        }
}

export class Provider extends Component{

    state = {
        contacts: [
            {
                id: 1,
                name: 'Phil Foden',
                email: 'phil@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Bruno Fernandes',
                email: 'bruno@gmail.com',
                phone: '111-111-1111'
            },
            {
                id: 3,
                name: 'Bernardo Silva',
                email: 'bernardo@gmail.com',
                phone: '222-222-2222'
            },
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;