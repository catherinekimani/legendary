import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import vector from '../assets/Vector.png'
import image from '../assets/fourth.png'
import google from '../assets/google.png'
import third from '../assets/second.png'
import one from '../assets/third.png'
import second from '../assets/first.png'


const Header = styled.header`
        position: sticky;
        top: 0;
        left: 0;
        margin-top:1.5%;
        right: 0;
        background: transparent;
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
`
const linkStyle = {
    textDecoration: "none",
    color: '#FBDDBB'
};
const Img = styled.img`
    position: absolute;
    left: 0%;
    right:0%;
    top: 2.36%;
    margin-left:2%;
    background: #00EDDF;
    
`
const Button = styled.button`
    background: #E2B887;
    color:black;
    width: 90px;
    height: 40px;
    font-weight:bold;
`
const H1 = styled.h1`
    color:white;
    font-size:6.5rem;
`
const Span = styled.span`
    color:#FBDDBB;
`
const P = styled.p`
    color:grey;
    font-size:1.5rem;
    
`
const Main = styled.main`
    text-align:center;
`
const H2 = styled.h2`
    color:white;
    font-size:3rem;
`
const P2 = styled.p`
            color:rgba(255, 255, 255, 0.83);
        line-height:8px;
`
const Name = styled.h2`
    color:#FBDDBB;
    text-align:center;
    font-weight:bold;
`
const Descr = styled.p`
    color:rgba(255, 255, 255, 0.83);
    text-align:center;
        line-height:8px;
`
const Container = styled.div`
    margin-top:20%;
`
const Button2 = styled.button`
    background: #FBDDBB;
    width: 110px;
`

const Footer = styled.footer`
    background:#0b0d17;
`

const I = styled.i`
    color:white;
`
const Home = () => {
    return (
    <div className='home'>
    <>
        <Header>
        <Img src={vector } class="card-img-top hover_img" alt=''></Img>
                
        <a href="#header" class="logo">Lilies</a>
<nav class="navbar">
    <Link to="/" style={linkStyle}>Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/sign">
    <Button type="button"> Sign Up </Button>
    </Link>
</nav>

</Header>
</>
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-md-8'>
                        <H1>Order <Span>food</Span> anytime, anywhere</H1>
                        <P>Browse from our list of specials to place your order and have food</P>
                        <P>delivered to you in no time. Affordable, tasty and fast!</P>
                        <img src={google} class="" width={100} alt=''></img>
                        <img src={google } class="" width={100}  alt=''></img>
                        
                    </div>
                    <div className='col-md-4'>
                    <img src={image } class="img1 mx-auto" width={50}  alt=''></img>
                            
                    </div>
                </div>
                <Main className='main'>
                    <H2>Special Meals of the day!</H2>
                    <P2 class='text-justify'>Check our sepecials of the day and get discounts on all our meals</P2>
                    <P2>and swift delivery to what ever location within Ilorin.</P2>
        </Main>
                <div class='container'>
                <div className='row'>
                    <div class="col-md-3 mx-5 ">
                            <img src={one} class="img2" width={400} alt=''></img>
                            <Name>Stir fry Pasta</Name>
                            <Descr>Stir fry pasta yada yada yada</Descr>
                            <Descr>because of Sesan</Descr>

                    </div>
                    <div class="col-md-3 mx-5">
                            <img src={second} class="img2" width={400} alt=''></img>
                            <Name>Meat Balls</Name>
                            <Descr>Stir fry pasta yada yada yada</Descr>
                            <Descr>because of Sesan</Descr>
                    </div>
                    <div class="col-md-3 mx-5">
                            <img src={third} class="img2" width={400} alt=''></img>
                            <Name>Burger Meal</Name>
                            <Descr>Stir fry pasta yada yada yada </Descr>
                            <Descr>because of Sesan</Descr>
                        </div>
                        </div>
                </div>
                <div className='container'>
                <Container className='row'>
                    <div className='col-md-7'>
                        <Name>Get notified when we update!</Name>
                        <Descr>Get notified when we add new items to our specials menu,</Descr>
                        <Descr> update our price list of have promos!</Descr>
                    </div>
                        <div className='col-md-5'>
                            <form class="d-flex w-75 mt-2">
                                <input class="form-control me-2" type="search" placeholder="gregphillips@gmail.com" aria-label="Search"></input>
                                <Button2 class="btn btn-warning" type="submit">Get notified</Button2>
                            </form>
                    </div>
                    </Container>
                </div>
                <Footer className='h-75 text-light mt-5'>
                    <Footer className='container'>
                        <div className='d-flex justify-content-evenly'>
                            <div>
                                <h3>Company</h3>
                                <p>About Us</p>
                                <p>Careers</p>
                                <p>Contact Us</p>
                            </div>
                            <div>
                                <h3>Support</h3>
                                <p>Help Center</p>
                                <p>Safety Center</p>
                            </div>
                            <div>
                            <h3>Legal</h3>
                            <p>Cookies Policy</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                                <p>Dispute resolution</p>
                            </div>
                            <div>
                                <h3>Install App</h3>
                                <img src={google} class="" width={100} alt=''></img> <br></br>
                                <img src={google } class="" width={100}  alt=''></img>
                            </div>
                        </div>
                        <div className='containe'>
                        <div className='d-flex  justify-content-between'>
                            <p>© 2021 LILIES, All rights reserved</p>
                            <I className=''>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                </I>
                            </div>
                            </div>
                </Footer>
                </Footer>
</div>
</div>
    
)
}

export default Home