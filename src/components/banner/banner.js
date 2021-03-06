import React from 'react'

import './banner.css'

// Create a Function that returns JSX( HTML of React World).
// Function Name must start with CAPS 
export function Banner() {
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
          displayUrl='manas.acharyya.nits.cse18@gmail.com'
          img='./assets/gmail.png' />

        <Links displayUrl='+91 7896 227982' img='./assets/contact.png' />

        <Links
          link='https://linkedin.com/in/manasacharyya25'
          displayUrl='linkedin.com/in/manasacharyya25'
          img='./assets/linkedin.png' />

        <Links
          link='https://github.com/manasacharyya25'
          displayUrl='github.com/manasacharyya25'
          img='/assets/github.png' />

        <Links />
      </section>
      <div className='separator'></div>
    </section>
  )
}

const Links = ({ link, displayUrl, img }) => {
  return (
    <div className='links'>
      <img src={img} alt={img} />
      <a href={link} target='__blank'>{displayUrl}</a>
    </div>
  )
}
