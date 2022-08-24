import React from 'react'
import styled from 'styled-components'

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
const Home = () => {
  return (
    <div>
      <Jsxstyled>
        <div class="logo">
            <Heading> Kate's <Span>Menu</Span></Heading>
        </div>
        <div class="links">
            <a href="k">Home</a>
            <a href="k">Menu</a>
            <a href="k">Popular</a>
            <a href="n">Contact</a>
        </div>
        <div class="links">
            <a href="k" id="signout" class="navigation-link">
            <i class="fas fa-sign-out-alt"></i>
        </a>
            <a href="j"> <i class="fa fa-sign-in" aria-hidden="true"></i></a>
        </div>
    </Jsxstyled>
    </div>
  )
}

export default Home