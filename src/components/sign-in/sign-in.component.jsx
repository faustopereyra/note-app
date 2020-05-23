import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"

import { signInWithGoogle, signInWithEmailAndPassword } from "../../firebase/firebase.util";

import "./sign-in.style.scss"

class SignIn extends React.Component {
    constructor(props) { //agregar props???
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault(); //Testear

        this.setState({ email: "", password: "" });
    };

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value }); //que pasa si saco los parentecis?
    };

    passValues = () => { 
        console.log( "se a clickeado",  this.state.email, this.state.password);
        signInWithEmailAndPassword(this.state.email,this.state.password)

    }

    render() {
        return (
            <div className="form">

                <form className="login-form" onSubmit={this.handleSubmit} >

                    <FormInput
                        name="email"
                        type="email"
                        placeholder="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        placeholder="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                    />

                    <CustomButton onClick={this.passValues} value={this.state.email} > Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                    <p className="message">Not registered? <a href="/signup">Create an account</a></p>
                </form>
                
            </div>
        )
    }






}

export default SignIn;