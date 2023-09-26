import React from 'react'
import './Contact.css'
import { RiHeart2Fill, RiHeart2Line, RiHeart3Fill } from 'react-icons/ri'
const Contact = () => {
  return (
    <section className='contact' id='contact'>

    <div className='title'>
<h4>Contact</h4>
<h2>Get in touch</h2>

    </div>
<div className='contact-container container'>

<div className='info'>

    <div className='box'>
        <h4>Adress</h4>
        <span>Burhaanpur MP</span>
    </div>
<div className='box'>
    <h4>phone</h4>
    <span>6260626147</span>
</div>


<div className='box'>
    <h4>Email</h4>
    <span>mohitnandvanshi3@gmail.com</span>
</div>

</div>
<div className='contact-form'>

<div className='form-name'>

<input type='text' name='first name' placeholder='First name' required/>

<input type='text' name='last name' placeholder='Last name' required/>

</div>
<input type='email' name='Email Adress' placeholder='Your Email adress'id="" required/>
<textarea name='' id=''  rows="7" placeholder='Message' required></textarea>
<div className='form-btn'>
<button type='submit' className='btn'>Send Message</button>

</div>
</div></div>
<div className='copyright'>
    <p>Copyright   &copy;    <a> <RiHeart3Fill/>    Mohit`s  </a>  Porfolio</p>
</div>



    </section>
  )
}

export default Contact