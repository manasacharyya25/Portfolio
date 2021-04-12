import React from 'react'
import ReactDom from 'react-dom'

// Create a Function that returns JSX( HTML of React World).
// Function Name must start with CAPS 
function Greeting() {
  return <h1>Hello World!</h1>
}

//Inject the JSX returned by above function, into Index.html
ReactDom.render(<Greeting />, document.getElementById('root'))