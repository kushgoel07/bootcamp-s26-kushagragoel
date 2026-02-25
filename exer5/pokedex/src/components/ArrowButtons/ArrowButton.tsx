import React from 'react'
import styles from "./ArrowButton.module.css"
import arrow from "./arrowImage.png"

type Props = {
  onNext: () => void;
  onPrev: () => void;
};


export default function ArrowButton({onNext, onPrev}: Props) {

    return (
        <>
        <div className = {styles.container}>
            <button className = {styles.leftButton} onClick = {onPrev}>
                <img src = {arrow} alt = "arrow"/>
            </button>
            <button className = {styles.rightButton}>
                <img src = {arrow} alt = "arrow" className = {styles.rightArrow} onClick={onNext}/>
            </button>
            
        </div>



        
        
        
        
        </>
    )



}