import React from 'react'
import "./About.css"
import { techData } from '@/app/utills/data'
const About = () => {
  return (
 <section className='about' id="about">

<div className='about-container container'>
<div className="left">

<div className='title'>
<h4>
About Myself


</h4>
<h2>Who i am</h2>


</div>
<p>MY name is Mohit Hemant Yadav I am Passionate about creating Websites using web languages such as HTML , CSS ,JAVASCRIPT And React/Next Js  That allow to users to access and interact with the site . </p>



 <div className='tech-container'>

{
    techData.map((card,i)=>(

<div className="card" key={i}>

<h4>{card.nmbrs}</h4>
<span>{card.des}</span>

</div>


    ))
}

 </div>
</div>
<div className="right">
<h3>Tool Expertice</h3>
<div className="tools-container">
<div className="tool">
<p>Visual studio 70%</p>
<span></span>

</div>
<div className="tool">
<p>GitHub 80%</p>
<span></span>

</div><div className="tool">
<p>Taiwind 70%</p>
<span></span>

</div>
<div className="tool">
<p>React/Next Js 70%</p>
<span></span>

</div>



</div>


</div>

</div>


 </section>
  )
}

export default About