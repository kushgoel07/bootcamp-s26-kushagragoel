import React from 'react'
import styles from "./Image.module.css"

type Props = {
  sprite?: string;
  name? : string;
  loading: boolean;
};


export default function Image({ sprite, name,loading }: Props) {

    if (!sprite) return null;
    return (
        <>
        <div className = {styles.imagebox}>
            <img className = {styles.pokemon} src = {sprite} alt = "pokemon"/>
        </div>

        <div className = {styles.nameBox}>
            <p className = {styles.pokeName}>{name}</p>
        </div>        
        </>

    )
}