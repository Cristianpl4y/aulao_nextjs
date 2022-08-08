import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso(){
    return(
        <Layout titulo="CSS Modularizado">
            <div className={ styles.classeTeste } >
                <h1>Estilo usando CSS Modularizado</h1>
            </div>
        </Layout>
        
    )
}