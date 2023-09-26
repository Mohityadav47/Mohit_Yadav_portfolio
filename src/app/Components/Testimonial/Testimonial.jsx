import React from 'react'
import './Testimonial.css'
import { authorData } from '@/app/utills/data'
const Testimonial = () => {
  return (
    <section className='testimonial' id='testimonial'>


        <div className='testimonial-container container'>
<div className='left'>

<div className='title'>
    <h4>Testimonial</h4>
    <h2>Our customer feedback</h2>
</div>
<p>Feedback from our customers here</p>
</div>
<div className='right has-scrollbar'>


{
    authorData.map((card,i)=>(

<div className='author' key={i}>

<div className='row'>
<img src={card.src} alt={card.src}/>

<div>

<h4>{card.title}</h4>
<p>{card.det}</p>

</div>
</div>
<p>{card.comnts}</p>

</div>

    ))

    
}


</div>
        </div>
    </section>
  )
}

export default Testimonial