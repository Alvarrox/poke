import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Pokemon = ({ data }) => {
    const router = useRouter()
    if (router.fallback) {
        return <p>Cargando...</p>
        
    }
    console.log(router);
    return (
        <div>
            <h1>{data.name} número #{data.id}</h1>
            <Image src={data.sprites.front_default} width={400} height={400}></Image>
            <Link href='/'>Volver a Inicio</Link>
        </div>
    )
}

export default Pokemon

export const getStaticProps = async ({ params }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()
    return { props: { data } }
}


export const getStaticPaths = async () => {
    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } },
    ]
    return {
        paths,
        fallback: 'blocking'//para dejar el cargando dejar fallback en true//con blocking esperara hasta que cargue
    }
}

// export const getServerSideProps = async ({ params }) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
//     const data = await response.json()
//     return { props: { data } }
// } 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

