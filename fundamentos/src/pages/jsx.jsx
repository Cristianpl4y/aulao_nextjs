import Layout from '../components/Layout'


export default function Jsx(){
    const titulo = <h1>JSX é um conceito Central</h1>
    
    const a = 4
    const b = 3

    function saudacao(nome) { return `Bem Vindo(a)! ${nome}` }

    return (
        <Layout titulo="Entendeno o JSX">
            { titulo }
            {saudacao('Visitante')}
            <p>Total: { a * b } </p>
            <p>
                { JSON.stringify({nome:"Zezinho", idade: 60}) }
            </p>
        </Layout>
    )
}