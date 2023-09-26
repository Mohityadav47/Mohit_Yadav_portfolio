"use client"



import './Nav.css'
import {RiMenu3Fill} from "react-icons/ri"
import {RiCloseFill} from "react-icons/ri"
import React, { useState } from 'react'

const Nav = () => {
    const[menuOpened,menuClosed] = useState(false)

    return (

   
   <nav>






        {/* deakop version */}

<div className='nav-container container'>
<div className='logo'>
<a href='#'> <span>M</span>OHIT</a>

</div>
<ul className='navlist'>
<li><a href='#home'>Home</a></li>
<li><a href='#about'>About</a></li>
<li><a href='#services'>services</a></li>
<li><a href='#home'>page</a><ul className='submenu'>
<li>
<a href='#portfolio'>Portfolio</a>



</li><li>
<a href='#portfolio'>Portfolio details</a>



</li>


</ul></li>




<li><a href='#testimonial'>Testimonial</a></li>


<li><a href='#contact'>contact</a></li>


</ul>
</div>
{/* mobitl version */}
    
    <div className='nm-cotainer container'>







    <div className='logo'>
<a href='#'> <span>M</span>OHIT</a>

</div>
{!menuOpened ? 
    <RiMenu3Fill size={30} onClick={()=>{menuClosed(true)}}/>:
    <RiCloseFill size={30} onClick={()=>menuClosed(false)}/>




}
<ul className='navlist' style={{transform:menuOpened && "translateX(0%)"}}>
<li><a href='#home'>Home</a></li>
<li><a href='#about'>About</a></li>
<li><a href='#services'>Services</a></li>
<li><a href='#home'>Page</a><ul className='submenu'>
<li>
<a href='#portfolio'>Portfolio</a>



</li><li>
<a href='#portfolio'>Portfolio details</a>



</li>


</ul></li>




<li><a href='#testimonial'>Testimonial</a></li>


<li><a href='#contact'>contact</a></li>


</ul>



    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </nav>
  )
}

export default Nav