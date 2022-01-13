import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div className='404'>
            <div className='404-container'>
                <Link to='/'>Back to Home Page</Link>
            </div>
            
        </div>
    );
};

export default index;