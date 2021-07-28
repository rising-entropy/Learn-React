import React from 'react';

class BasicForm extends React.Component{

    constructor()
    {
        super()
        this.state = {
            name: "Devang",
            color: "#2e2e2e"
        }
    }


    formSubmitHandler = (e) => {
        e.preventDefault()
        console.log({
            name: this.state.name,
            color: this.state.color
        })
    }

    nameHandler = (e) => {
        this.setState({name: e.target.value})
    }

    colorHandler = (e) => {
        this.setState({color: e.target.value})
    }


    render(){
        return(
            <form onSubmit={this.formSubmitHandler} className="text-center">
                <label htmlFor="name">Name:</label><br />
                <input type="text" name="name" defaultValue="Devang" onChange={this.nameHandler} required /><br />
                <label htmlFor="color">Color:</label><br />
                <input type="color" name="color" onChange={this.colorHandler} required  />
                <button type="submit">Submit</button>

                <br /><br /><br />

                <h3 style={{color: this.state.color}}>
                    {this.state.name}
                </h3>
            </form>
        )
    }
}

export default BasicForm