import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {

    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Erika Lust',
                email: 'erika@gmail.com',
                phone: '111-111-1111'
            },
            {
                id: 3,
                name: 'Karen Bell',
                email: 'karen@gmail.com',
                phone: '222-222-2222'
            },
        ]
    }

    deleteContact = (id) => {
        const newContactList = this.state.contacts.filter(contact => contact.id != id);
        this.setState({contacts: newContactList});
    }

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)}/>
                ))}
            </React.Fragment>
        )
    }
}
