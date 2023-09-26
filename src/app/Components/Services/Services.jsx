import React from 'react'
import './Services.css'
import { tabData } from '@/app/utills/data'
const Services = () => {
  return (
<section className='services' id='services'>

<div className='title'>

    <h4 > My services</h4>
    <h2>Service i provide</h2>
</div>
<div className='services-container container'> 

<div className='left'>

<div className='tab-buttons'>
    {tabData.map((tab,i)=>(
<div className='tab-btns' key={i}>
<div className='tab-icons'>
{tab.icon}
</div>
<div >
<h4>{tab.title}
</h4>
<span>{tab.Quantity}</span>
</div>

</div>


    ))
    }
</div>

</div>
<div className='right'>
    <h1>Frontend</h1>
    <p>
    
    Frontend web devlopment is the devlopment of the graphical user interface of a webdite , through of the use of HTML ,CSS ,Javascript , so that users can view and intract with that website.
    </p>
    <br/><p>Frontend languages are HTML CSS Javascript and Framworks are React, Angular, Svelte, bootstarp</p>
    <br/>
    <p>NEXT JS is a React Framwork that enable features, including server-side rendering and genrating static websites. </p>
    
    
</div>
</div>

</section>
  )
}

export default Services