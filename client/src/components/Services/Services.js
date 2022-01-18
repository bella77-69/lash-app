import React from 'react';
import {Link } from 'react-router-dom'



function Services() {

 
  return (
    <div>
        Services
        <div>
        <Link to='/services/classic'>Classic</Link>
        </div>
   <div>
   <Link to='/services/hybrid'>Hybrid</Link>
   </div>
  <div>
  <Link to='/services/volume'>Volume</Link>
  </div>
  <div>
  <Link to='/services/russian'>Russian</Link>
  </div>
  <div>
  <Link to='/services/lift'>Lash Lift</Link>
  </div>
  
  <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
    </div>
  );
}

export default Services;