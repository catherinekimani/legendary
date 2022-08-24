import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'


const Jsxstyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Span = styled.span`
    color: #e4950d;
`
const Heading = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    color: white;
`
const Food = styled.div`
        /* From https://css.glass */
        background: rgba(7, 3, 60, 0.47);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(7, 3, 60, 0.3);
        width:8%;
        font-family: 'Times New Roman', Times, serif;
        margin-left:1%;
`
const H1 = styled.p`
        color:white;
`
const Home = () => {
  return (
    <div>
      <Jsxstyled>
        <div class="logo">
            <Heading> Kate's <Span>Menu</Span></Heading>
        </div>
        <div class="links">
            <Link to='/'>Home</Link>
            <Link to='menu'>Menu</Link>
            <Link to='popular'>Popular</Link>
            <Link to='contact'>Contact</Link>
        </div>
        <div class="links">
            <a href="k" id="signout" class="navigation-link">
            <i class="fas fa-sign-out-alt"></i>
        </a>
            <a href="j"> <i class="fa fa-sign-in" aria-hidden="true"></i></a>
        </div>
      </Jsxstyled>
      
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                  <Food>
                      <H1>Order Food</H1>
                      <H1> Anywhere Anytime</H1>
                      </Food>
            <div class="carousel-item active">
                <img src={first} class="d-block w-50 mx-auto" alt="..."></img>
            </div>
            <div class="carousel-item">
                <img src={second} class="d-block w-50 mx-auto" alt="..."></img>
            </div>
            <div class="carousel-item">
                <img src={third} class="d-block w-50 mx-auto" alt="..." ></img>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
    
  )
}

export default Home