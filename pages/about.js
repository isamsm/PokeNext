import Image from "next/image"

import styles from '../styles/About.module.css'

export default function About(){
    return (
        <>
            <div className={styles.aboutcontainer}>
                <h1> O que é o PokeNext? </h1>
                <p> O PokeNext é um site contendo informações a respeito de Pokemons </p>
                <Image src='/assets/images/charizard.png' width='300' height='300' alt='img charizard'/>
            </div>
        </>
    )
}