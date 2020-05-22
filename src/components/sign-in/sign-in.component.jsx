import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"

import { signInWithGoogle } from "../../firebase/firebase.util";

import "./sign-in.style.scss"

class SignIn extends React.Component {
    constructor() { //agregar props???
        super();

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

    render() {
        return (
            <div class="grid">

                <form className="form login" onSubmit={this.handleSubmit} >

                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required
                    />

                    <CustomButton type="submit"> Sing in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}> Sing in with Google</CustomButton>
                </form>
                <p class="text--center">Not a member? <a href="#">Sign up now</a></p>
            </div>
        )
    }






}

export default SignIn;