import React from 'react'
import './Hero.scss'
import herobg from './img/herobg.svg'

const Hero = () => {
  return (
   <>
   <main id='hero__main' 
   style={{ 
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     height:"653px",
     width: '100%',
      backgroundImage: `url(${herobg})
      ` 
    }}>
    <div className="hero  Container">
        <h3>Super Flash Sale <br /> 50% Off</h3>





    </div>







   </main>


   
   
   </>
  )
}

export default Hero