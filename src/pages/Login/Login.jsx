import React, {useState} from 'react';
import './Login.css';
import assets from '../../assets/assets.js';

const Login = () => {

    const [currentState, setCurrentState] = useState("Sign Up");
    const [currentToggleMessage, setToggleMessage] = useState("Already have an account");
    const [formSubmitButtonText, setFormSubmitButtonText] = useState("Create Account");

    const handleToggledCheckBox = () => {
        if (currentState === 'Sign Up'){
            setCurrentState('Login')
            setToggleMessage('To create new Account')
            setFormSubmitButtonText('Login Now')
        }else if(currentState === 'Login'){
            setCurrentState('Sign Up')
            setToggleMessage('Already have an Account')
            setFormSubmitButtonText('Create Account')
        }
    };

    return (
        <div className={'login'}>
            <img src={assets.univaiLogo} alt="" className="logo"/>
            <form className="login-form">
                <h2>{currentState}</h2>
                {currentState === "Sign Up" ? <input type="text" placeholder={'User Name'} className={'form-input'} required={true}/> : null}
                <input type="email" placeholder={'Email Address'} className={'form-input'} required={true}/>
                <input type="password" placeholder={'Password'} className={'form-input'} required={true}/>
                <button type={'submit'}>{formSubmitButtonText}</button>
                <div className="login-term">
                    <input type="checkbox" className={'checkbox'} required={true}/>
                    <p>Agree to the terms of use & privacy policy.</p>
                </div>
                <div className="login-forgot">
                    <p className="login-toggle">
                        {currentToggleMessage} <span onClick={handleToggledCheckBox}>click here</span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;