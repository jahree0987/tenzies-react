import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    const styles2 ={
        backgroundColor: props.color === props.color ? props.color : ''
    }
    const styles3 ={
        backgroundColor: props.background === props.background ? props.background :''
    }
    return (
        
       
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
          
            {props.value === 1 && 
            
            <div  className='die-face first-face'>
                <span style ={styles2} className="dot"></span>
            </div>} 
            {props.value === 2 && 
            <div className='die-face second-face'>
                <span style ={styles2}  className="dot"></span> 
                <span style ={styles2}  className="dot"></span>
            </div>} 
            {props.value === 3 && 
            <div className ='die-face third-face'>
                <span style ={styles2}  className="dot"></span> 
                <span style ={styles2}  className="dot"></span> 
                <span style ={styles2}  className="dot"></span>
            </div>} 
            {props.value === 4 && 
            <div className ='die-face fourth-face'>
                <div className ='columns'>
                    <span style ={styles2}  className="dot"></span> 
                    <span style ={styles2}  className="dot"></span> 
                </div>
                <div className ='columns'>
                    <span style ={styles2}  className="dot"></span>
                    <span style ={styles2}  className="dot"></span>
                </div>
                
             
             </div>} 
            {props.value === 5 && 
            <div className = 'die-face fifth-face'>
                 <div className ='columns'>
                    <span style ={styles2}  className="dot"></span> 
                    <span style ={styles2}  className="dot"></span> 
                </div>
                
                 <div className ='columns'>
                    <span style ={styles2}  className="dot"></span>  
                </div>
                
                <div className ='columns'>
                    <span style ={styles2}  className="dot"></span> 
                    <span style ={styles2}  className="dot"></span> 
                </div>
            </div>}
             
            {props.value === 6 && 
            <div className ='die-face fourth-face'>
                <div className ='columns'>
                    <span style ={styles2} className="dot"></span> 
                    <span style ={styles2} className="dot"></span> 
                    <span style ={styles2} className="dot"></span>
                </div>
                
                <div className ='columns'>
                    <span style ={styles2} className="dot"></span>
                    <span style ={styles2} className="dot"></span>
                    <span style ={styles2} className="dot"></span>
                </div>
                
             </div>}      
        </div>
    )
}