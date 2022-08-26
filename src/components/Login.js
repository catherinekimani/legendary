import React from 'react'
import login from '../assets/login.png'

import styled from 'styled-components'

const Loginbg = styled.div`
    background:white;
    height:100vh;
`
const Title = styled.h5`
    font-family: 'Montserrat', sans-serif;  
    font-size: 2rem;
    font-weight:bold;
    color:rgba(0, 48, 46, 1);
    margin-top: 30px;
    text-align:center;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: 'Times New Roman', Times, serif;
    color: rgba(251, 221, 187, 1);
    background-color: #184d47;
    text-decoration: none;
    border: 1px solid #184d47;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`

const Login = () => {
    return (
    <Loginbg>
        
            <div class="wrapper">
                
                <div class="login">
                    <div class="login-decoration">
        <img src={login } class="" width={400} alt=''></img>

                    </div>
                    
            <div class="login-form">      
            <Title class="login-title">Welcome Back!</Title>
            <div class="form-wrapper">
            <div class="input-wrapper">
                
                <input class="input" type="text" id="email" name="email" placeholder='Your Email address' />
                </div>
                <div class="input-wrapper">
                <input class="input" type="password" id="password" name="password" placeholder='Your Password' />
                </div>
                <div class="actions">
                <Button class="action" href="l">Login</Button>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <div class="action-help">
                <a class="help-link" href="l">Create an account?</a>
                </div>
                            <div class="action-help">
                <a class="help-link" href="l">Forgot Password?</a>
                </div>
</div>
            </div>
        </div>
        </div>
        </div>
    </Loginbg>
    )
}

export default Login