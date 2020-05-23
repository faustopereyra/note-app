import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

import "./sign-up.style.scss"

class SignUp extends React.Component {
    constructor() { 
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleSubmit = async e => {
        e.preventDefault(); 

        const { displayName, email, password, confirmPassword } = this.state;

        if ( password !== confirmPassword){
            alert("passwords don't match ");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (err) {
            console.log(err)
        }
    };

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value }); 
    };

    render() {
        return (
            <div className="form">

                <form className="login-form" onSubmit={this.handleSubmit} >

                    <FormInput
                        name="displayName"
                        type="text"
                        placeholder="Your Name"
                        onChange={this.handleChange}
                        value={this.state.displayName}
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}
                        required
                    />

                    <CustomButton type="submit"> Sign Up</CustomButton>
                    <p className="message">Already registered? <a href="/signin">Sign In</a></p>
                </form>
                
            </div>
        )
    }




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

}

export default SignUp;