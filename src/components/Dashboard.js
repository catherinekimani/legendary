import React,  {useState} from 'react'
import logo from '../assets/logo.svg'
import styled from 'styled-components'
import first from '../assets/first.png'
import third from '../assets/second.png'
import second from '../assets/third.png'
import fourth from '../assets/fourth.png'
import fifth from '../assets/one.png'
import six from '../assets/six.png'


const Card = styled.div`
   width:18rem;
`
const Grig = styled.div`
   display: grid;
   grid-template-columns: auto auto auto;
   grid-template-rows: 400px;
   margin-left:15%;
   overflow-y: hidden;


`
const Dashboard = () => {
   const [counter,setCounter] = useState(0)
   const Increase = () => {
      setCounter(counter+1)
}
   

      let user = JSON.parse(sessionStorage.getItem('user'))
      return (
         <div className='bg'>
               <nav class="navbar navbar-default no-margin">
   </nav>
   <div id="wrapper">
               <div id="sidebar-wrapper">
         <div class="navbar-header fixed-brand">
         <img src={logo } class="" alt=''></img>
         <a class="navbar-brand" href="/">Lilies</a>
      </div>
         <ul class="sidebar-nav nav-pills nav-stacked" id="menu">
            <li>
               <a href="/"><span class="fa-stack fa-lg"><i class="fa fa-home fa-stack-1x "  aria-hidden="true"></i></span> Dashboard</a>
            </li>
            <li>
               <a href="/"><span class="fa-stack fa-lg"><i class="fa fa-user fa-stack-1x " aria-hidden="true"></i></span>Your Profiles</a>
            </li>
            <li>
               <a href="/Orders"><span class="fa-stack fa-lg"><i class="fa fa-cloud-download fa-stack-1x "></i></span>Orders<span class="badge badge-pill badge-danger">{ counter}</span></a>
            </li>
            <li>
               <a href="/Cart"> <span class="fa-stack fa-lg"><i class="fa fa-bookmark fa-stack-1x" aria-hidden="true"></i></span>Your Cart<span class="badge onee badge-pill badge-danger">{ counter}</span></a>
            </li>
         </ul>
      </div>
            </div>
                  <div id="page-content-wrapper">
         <div class="container-fluid">
            <div class="row">
                        <div class="col-lg-12 text-center">
               <h1 style={{ color: 'black' }}>{`Good afternoon, ${user?.name}!`}</h1>
                        <p>What delicious meal are you craving today?</p>
         <Grig className='container-fluid mb-3'>
               <Card class="card" >
                     <img src={third} class="" width={200} alt="..."/>
                     <div class="card-body">
                     <h5 class="card-title">Stir Fry Pasta</h5>
                                 <p>The in-house pasta
                                 and chicken by chef Moose</p>
                     <a href="i" class="card-link card1">N 1,000.00</a>
                     <button onClick={Increase} className='btn btn-sm btn2'>Add to cart</button>
                     </div>
            </Card>
                           
            <Card class="card" >
                  <img src={second} class="" width={200} alt="..."/>
                  <div class="card-body">
                                 <h5 class="card-title">Stir Fry Pasta</h5>
                                 <p>The in-house pasta and chicken by chef Moose</p>
                  <a href="i" class="card-link card1">N 1,000.00</a>
                  <button onClick={Increase} className='btn btn-sm btn2'>Add to cart</button>
                  </div>
         </Card>
         <Card class="card" >
               <img src={first} class="" width={200} alt="..."/>
               <div class="card-body">
               <h5 class="card-title">Stir Fry Pasta</h5>
               <p class="card-text">The in-house pasta and chicken by chef Moose</p>
               <a href="i" class="card-link card1">N 1,000.00</a>
               <button onClick={Increase} className='btn btn-sm btn2'>Add to cart</button>
               </div>
         </Card>
                        
                        
                        
         <Card class="card">
               <img src={fourth} class="" width={200} alt="..."/>
               <div class="card-body">
               <h5 class="card-title">Stir Fry Pasta</h5>
               <p class="card-text">The in-house pasta and chicken by chef Moose</p>
               <a href="i" class="card-link card1">N 1,000.00</a>
               <button onClick={Increase} className='btn btn-sm btn2'>Add to cart</button>
               </div>
         </Card>
         <Card class="card" >
               <img src={fifth} class="" width={200} alt="..."/>
               <div class="card-body">
               <h5 class="card-title">Stir Fry Pasta</h5>
               <p class="card-text">The in-house pasta and chicken by chef Moose</p>
               <a href="i" class="card-link card1">N 1,000.00</a>
               <button onClick={Increase} className='btn btn-sm btn2'>Add to cart</button>
               </div>
         </Card>
         <Card class="card" >
               <img src={six} class="" width={200} alt="..."/>
               <div class="card-body">
               <h5 class="card-title">Stir Fry Pasta</h5>
               <p class="card-text">The in-house pasta and chicken by chef Moose</p>
               <a href="i" class="card-link card1 btn">N 1,000.00</a>
               <button onClick={Increase} className='btn btn-sm btn2'>Add to cart</button>
               </div>
               </Card>
      </Grig>
               </div>
            </div>
         </div>
      </div>
      </div>
      
   )
}

export default Dashboard