import React, {useEffect} from 'react'
import './main.css'

// import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

//import images
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

//The array named data

const Data =[
  {
    id:1,
    imgSrc:img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities'
  },

  {
    id:2,
    imgSrc:img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
  },

  {
    id:3,
    imgSrc:img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is "lavish" and "beauty". Always interesting to be in this place.'
  },

  {
    id:4,
    imgSrc:img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis sollicitudin dolor vitae consequat. Phasellus est nisl, congue a quam in, malesuada rhoncus erat.'
  },

  {
    id:5,
    imgSrc:img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis sollicitudin dolor vitae consequat. Phasellus est nisl, congue a quam in, malesuada rhoncus erat.'
  },

  {
    id:6,
    imgSrc:img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis sollicitudin dolor vitae consequat. Phasellus est nisl, congue a quam in, malesuada rhoncus erat.'
  },

  {
    id:7,
    imgSrc:img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis sollicitudin dolor vitae consequat. Phasellus est nisl, congue a quam in, malesuada rhoncus erat.'
  },

  {
    id:8,
    imgSrc:img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis sollicitudin dolor vitae consequat. Phasellus est nisl, congue a quam in, malesuada rhoncus erat.'
  },

  {
    id:9,
    imgSrc:img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis sollicitudin dolor vitae consequat. Phasellus est nisl, congue a quam in, malesuada rhoncus erat.'
  },
]

const Main = () => {
  //Create a react hook to add a scroll animation.....
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {/*Here I am going to use high ordfer array method (map). To do that I will use a list of object in one array. 
        I,m going to create an array named data and from that I will .map() array to fetch each destination at once. 
        */}

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id} 
              data-aos="fade-up" 
              className="singleDestination">
                {/*Here it will return single id from the map array */}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }

      </div>

    </section>
  )
}

export default Main