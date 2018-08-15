import React from 'react';

import './navlinks.css'
export default function NavLinks(props){
    return (
        <div>
            <nav className='navlinks'>
                <a href= '#' onClick = {props.onClickWhat}> WHAT? </a>
                <div/>
                <div/>
                <a href ='#' onClick = {props.onClickNew}> +NEWGAME </a>
            </nav>
        </div> 
        
    )   



}