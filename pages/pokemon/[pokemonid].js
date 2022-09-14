import Image from "next/image";

import styles from '../../styles/Pokemon.module.css'

export const getStaticPaths = async() => {

    const maxPokemons = 251

    const api = `https://pokeapi.co/api/v2/pokemon/` //rota api
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`); //requisição, limitando o número máximo de dados 
    const data = await res.json()

    //params

    const paths = data.results.map((pokemon, index) => {
        return {
            params: {pokemonid: (index + 1).toString(),}
        }
    })

    return {
        paths,
        fallback: false,
    } //apenas pega os dados pedidos

}

export const getStaticProps = async(context) => {

    const id = context.params.pokemonid

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { pokemon: data },
    }

} //carregar dado a dado

export default function Pokemon({ pokemon }){
    return (
        <>
            <div className={styles.pokemoncontainer}>
                <h1> {pokemon.name} </h1>
                <Image loader={() => `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width="200" height="200" alt={pokemon.name}/>
                <div>
                    <h3> Número: </h3>
                    <p> #{pokemon.id} </p>
                </div>
                <div className={styles.pokemontypes}>
                    <h3> Tipo: </h3>
                    <div>
                        {pokemon.types.map((item, index) => (
                            <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}> {item.type.name} </span>
                        ))}
                    </div>
                </div>
                <div className={styles.pokemonmeasurements}>
                    <div className={styles.pokemonheight}>
                        <h4> Altura: </h4>
                        <p> {pokemon.height * 10} cm </p> 
                    </div>
                    <div className={styles.pokemonweight}>
                        <h4> Peso: </h4>
                        <p> {pokemon.weight / 10} kg </p>
                    </div>
                </div>
            </div>
        </>
    )
}