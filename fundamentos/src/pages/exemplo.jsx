import Cabecalho from "../components/Cabecalho"
import Layout from '../components/Layout'

export default function Exemplo(){
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js & React"/>
            <h1>Exemplo</h1>
        </Layout>        
    )
}