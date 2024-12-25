import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <ul>
       <li><Link to ='/about'>about</Link></li> 
       <li><Link to ='/new'>new</Link></li> 
      <li><Link to ='/'>home</Link></li>
        </ul>
    </>
  )
}

export default About