// import React, { useState } from 'react';
// import './Login.scss';
// import PropTypes from 'prop-types';

// async function loginUser(credentials) {
//   return fetch('http://localhost:8080/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }

// export default function Login( {setToken} ) {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     setToken(token);
//     console.log(token)
//   }

//   return(
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={e => setUserName(e.target.value)} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" onChange={e => setPassword(e.target.value)} />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }


import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.scss'

export default function Login() {
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/signup">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}