import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

// Create a Function that returns JSX( HTML of React World).
// Function Name must start with CAPS 
function Banner() {
  return (
    <React.Fragment>
      <h1>
        Manas Pratim Acharyya
      </h1>
      <section>
        <article>manas.acharyya.nits.cse18@gmail.com</article>
        <article>+91 7896 227982</article>
        <section>linkedin.com/in/manasacharyya25</section>
        <section>github.com/manasacharyya25</section>
      </section>
    </React.Fragment>
  )
}

//Inject the JSX returned by above function, into Index.html
ReactDom.render(<Banner />, document.getElementById('root'))