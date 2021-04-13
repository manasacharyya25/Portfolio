import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

// Create a Function that returns JSX( HTML of React World).
// Function Name must start with CAPS 
function Banner() {
  return (
    <section className='banner'>
      <span className="banner-head">
        <div className='banner-image'>
          <img src='https://media-exp1.licdn.com/dms/image/C5103AQHifPVvdvOtxA/profile-displayphoto-shrink_400_400/0/1558908973129?e=1623888000&v=beta&t=ou9_e0IUFeUAk7zKOBT-CsJNBtq5LIE4F03v-kVRA4o' alt='profile'></img>
        </div>
        <div className="banner-title">
          <h1>Manas Pratim Acharyya</h1>
        </div>
      </span>
      <section className='banner-links'>
        <Links
          link='manas.acharyya.nits.cse18@gmail.com'
          img='./assets/gmail.png' />

        <Links link='+91 7896 227982' img='./assets/contact.png' />

        <Links
          link='linkedin.com/in/manasacharyya25'
          img='./assets/linkedin.png' />

        <Links
          link='github.com/manasacharyya25'
          img='/assets/github.png' />

        <Links />
      </section>
      <div className='separator'></div>
    </section>
  )
}

const Links = ({ link, img }) => {
  return (
    <div className='links'>
      <img src={img} alt={img} />
      <a href={link}>{link}</a>
    </div>
  )
}

//Inject the JSX returned by above function, into Index.html
ReactDom.render(<Banner />, document.getElementById('root'))