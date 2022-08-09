import Link from 'next/link'
import Navegador from '../components/Navegador'
import Layout from '../components/Layout'


export default function Inicio(){
    return (
        <Layout titulo="Início dos Estudos">
            <h2>Fundamentos de Next.js & React</h2>
            <p>Vamos estudar esse framework ;)</p>

            <div style={{display:'flex', flexDirection: 'row'}}>
                <Navegador destino="/exemplo" texto="Exemplo"></Navegador>
                <Navegador destino="/jsx" texto="Jsx"></Navegador>
                <Navegador destino="/estiloso" texto="Estiloso"></Navegador>
                <Navegador destino="/navegador" texto="Navegação #01"></Navegador>
                <Navegador destino="/cliente/RJ/021" texto="Navegação #02"></Navegador>
                <Navegador destino="/estado" texto="Componente com Estado"></Navegador>
            </div>
          
        </Layout>
       
    )
}