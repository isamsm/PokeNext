import Image from "next/image"
import Link from "next/link"

import styles from '../styles/404.module.css'

export default function NotFound(){
    return (
        <>
            <div className={styles.errorcontainer}>
                <h1> 404 </h1>
                <p> Opa, parece que não temos o conteúdo que você procura </p>
                <Image src='/assets/images/squirtle.png' width='300' height='300' alt='img squirtle'/>
                <Link href='/'>
                    <a> Voltar </a>
                </Link>
            </div>
        </>
    )
}