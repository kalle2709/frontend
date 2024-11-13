import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import './Home.css'
import Footer from '../../Footer/Footer'
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpeg';
import img3 from '../../../images/img3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';



const Homepage = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const images = [img1,img2,img3];
    const animationStyle = {
        width: '100%',
        height: '80vh',
        opacity:0.8,
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        transition: 'background-image 1s ease-in-out',
        marginTop: '8rem'
    }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div>
        {/* <div className = 'headerDiv'>
             <Header/>
        </div> */}
        <div style={animationStyle} className = 'imagepart'>        

        </div>
        
        {/* <div>
          <Footer/>
        </div> */}
      
    </div>
  )
}

export default Homepage
