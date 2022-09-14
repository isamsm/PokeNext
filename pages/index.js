import styles from '../styles/Home.module.css'
import Image from 'next/image';

import Card from '../components/Card';

export async function getStaticProps() {

  const maxPokemons = 251

  const api = `https://pokeapi.co/api/v2/pokemon/` //rota api

  const res = await fetch(`${api}/?limit=${maxPokemons}`); //requisição, limitando o número máximo de dados 
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  }) //adicionar id pokemon

  return {
    props: {
      pokemons: data.results,
    },
  }

}

export default function Home({ pokemons }) {
  return (
    <>
        <div className={styles.titlecontainer}>
          <h1> Poke <span> Next</span> </h1>
          <Image src='/assets/images/pokeball.png' width='50' height='50' alt="Logo PokeNext"/>
        </div>
        <div className={styles.pokemoncontainer}>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
    </>
  )
}
