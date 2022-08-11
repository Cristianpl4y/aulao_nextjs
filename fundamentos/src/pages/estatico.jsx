import Layout from "../components/Layout";


export async function getStaticProps(){
    const Aleatorio = Math.random()
    return { props : { Aleatorio } }
}


export default function Estatico(props){
    return (
        <Layout titulo="Pré-Renderização na Prática">
            <div>{props.Aleatorio}</div>
        </Layout>
    )
}