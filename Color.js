import React from 'react'

export default function Color(props){
    
    const styles = {
        backgroundColor: props.color,
        color: 'white',
        borderColor: props.color,
    }
    
    return(
        
            <button 
                style ={styles}
                className='color-button'
                onClick={props.handleColor}
                color= {props.color}
                background ={props.background}
                >
                {props.color}
            </button>
        
    )
}