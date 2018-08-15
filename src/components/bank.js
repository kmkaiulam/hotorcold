import React from 'react';

import './bank.css';
export default function Bank(props) {  
    const bankValues = props.bank.map((value, index) => (
        <div key={index} className="bankguess">
            {value}
        </div>
    ))
    return (
        <div className='bank'>
         {bankValues}
        </div>
    );
}


