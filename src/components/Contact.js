import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contact extends Component {

    state = {
        showContactInfo: false,
    }

    onShowClick = () => {
        if(this.state.showContactInfo === false)
        {this.setState({showContactInfo: true});}
        else
        {this.setState({showContactInfo: false})}
    }

    render() {
        const {name, email, phone} = this.props.contact;
        return (
            <div className="card card-body mb-3">
                <h4>{name} {this.state.showContactInfo ? (<i onClick={this.onShowClick.bind(this, name)} className="fas fa-sort-up"></i>) : (<i onClick={this.onShowClick.bind(this, name)} className="fas fa-sort-down"></i>) }</h4>
                {this.state.showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Contact: {phone}</li>
                </ul>) : null}
                
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}