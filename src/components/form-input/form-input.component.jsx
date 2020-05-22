import React from "react";

import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {label ? (
            <label
                className={`${
                    otherProps.value.length ? "shrink" : ""
                    } form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
);

export default FormInput;


/*<div class="form__field">
    <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required>
  </div>*/