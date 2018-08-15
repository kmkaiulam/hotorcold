import React from 'react';

import './counter.css';
export default function Counter(props) {
    return (
        <div className ='counter'> 
            <h2 className = 'count-text'> Guess #<div className='count'>{props.count}</div>!</h2>
        </div>
    );
}