import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            formData: {
                firstName: '',
                lastName: ''
            }//end formData
        }//end this.state
    }//end constructor

    handleChange = event => {
        const formData = {...this.state.formData};
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }//end handleChange

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ submitted: true });
    }//end handleSubmit

    resetForm = event => {
        this.setState({
            submitted: false,
            formData: {
                firstName: '',
                lastName: ''
            }//end formData
        });//end setState
    }//end resetForm

    render() {
        if(this.state.submitted) {
            return (
                <div className="Contact">
                    <p>Thank you, {this.state.formData.firstName}, for submitting the form.</p>
                    <button onClick={this.resetForm}>Reset Form</button>
                </div>
            );//end return JSX
        }//end if

        return (
            <form className="Contact" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.formData.firstName}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={this.state.formData.lastName}
                        onChange={this.handleChange}
                    />
                    <button>Submit Form</button>
                </div>
                <div>
                    {this.state.formData.firstName}
                    <br/>
                    {this.state.formData.lastName}
                </div>
            </form>
        );//end return JSX
    }//end render

}//end Contact

export default Contact;