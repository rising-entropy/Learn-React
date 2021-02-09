import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context'

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

    onDeleteContactClick = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id,
        });
    }

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card card-body mb-3">
                            <h4>{name} {this.state.showContactInfo ? (<i onClick={this.onShowClick} className="fas fa-sort-up" style={{cursor: 'pointer'}}></i>) : (<i onClick={this.onShowClick} className="fas fa-sort-down" style={{cursor: 'pointer'}}></i>) } <i onClick={this.onDeleteContactClick.bind(this, id, dispatch)} className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}}></i></h4>
                            {this.state.showContactInfo ? (<ul className="list-group">
                            <li className="list-group-item">Email: {email}</li>
                            <li className="list-group-item">Contact: {phone}</li>
                            </ul>) : null}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}