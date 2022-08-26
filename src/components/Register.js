import React from 'react'
import register from '../assets/register.png'

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

const Register = () => {
    return (
    <Loginbg>
        
            <div class="wrapper">
                
                <div class="login">
                    <div class="login-decoration">
        <img src={register } class="" width={400} alt=''></img>

                    </div>
                    
            <div class="register-form">      
            <Title class="login-title">Welcome to Lilies!</Title>
                        <div class="form-wrapper">
                            <div class="input-wrapper">
                <input class="input" type="text" id="text" name="text" placeholder='Your First Name' />
                </div>
                <div class="input-wrapper">
                <input class="input" type="text" id="email" name="email" placeholder='Your Email address' />
                </div>
                <div class="input-wrapper">
                <input class="input" type="password" id="password" name="password" placeholder='Your Password' />
                </div>
                <div class="actions">
                <Button class="action" href="l">Sign Up</Button>
                            </div>
                            <div className='text-center'>
                            <div class="action-help">
                <a class="help-link" href="l">Already have an account. LOGIN</a>
                </div>
</div>
            </div>
        </div>
        </div>
        </div>
    </Loginbg>
    )
}

export default Register