import React from 'react'
import './Hero.css'

import Imag from 'next/image'


import { RiFacebookBoxFill, RiGithubFill, RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri'
const Hero = () => {
  return (
<section id='home' className='home'>
<div className='home-container container'>

<div className='content'>
<h4>Hello</h4>
<h1>i aM  MOHIT</h1>
<p>

I have been working as a web devloper for a quit some time now. i believe i am a very ambitious person who loves to work on making the website work well.

</p>
<div className='home-btns'>
<a href='/mycv.pdf'><button className='btn'>Downlod cv</button></a>
<button className='btn btn-2'>Hire me</button>


</div>
<div className='social-icons'>
<a href='https://www.facebook.com/mohit.ahir.397948'><RiFacebookBoxFill/></a>
<a href='https://instagram.com/_mohit_yadav_47?utm_source=qr&igshid=ZDe4DBmNjlmNQ%3D%3D'><RiInstagramFill/></a>
<a href='https://github.com/Mohityadav47'><RiGithubFill/></a>
<a href='https://www.linkedin.com/in/mohit-yadav-a59697260'><RiLinkedinBoxFill/></a>


</div>
</div>
<div className='image'>

<img src='./pro2.png'/>

</div>
</div>



</section>
  )
}
export default Hero