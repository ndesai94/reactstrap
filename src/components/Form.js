import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFoodChange = this.handleFoodChange.bind(this);

        this.state = {
            name: '',
            email: '',
            food: ''
        };
    }


    getValidationState() {
        const length = this.state.email.length;
        if (this.state.email.indexOf('@') > -1 && this.state.email.indexOf('.') > -1) {
            return 'success';
        } else if (length > 0) {
            return 'error';
        } else {
            return null;
        }
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handleFoodChange(e) {
        this.setState({ food: e.target.value });
    }

    render() {
        return (
            <div>
                <FormGroup
                    controlId="formBasicText">

                    <ControlLabel> Your Name </ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.name}
                        placeholder="Enter name"
                        onChange={this.handleNameChange}
                    />
                </FormGroup>
                <FormGroup
                    controlId="formValidationSuccess2"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Your Email</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.email}
                        placeholder="Enter email"
                        onChange={this.handleEmailChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>A valid email address is required.</HelpBlock>
                </FormGroup>
                <FormGroup
                    controlId="formBasicText">

                    <ControlLabel> Your Favorite Food </ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.food}
                        placeholder="Enter favorite food"
                        onChange={this.handleFoodChange}
                    />
                </FormGroup> <br /> <br />
                <Button type="submit" onClick={() => this.props.addRow(this.state)}>Submit</Button>
            </div>
        )
    }
}

export default Form;