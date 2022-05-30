import './style.css'
import Card from './Card'

function Lista({listTransactions,setListTransactions}){

    return (
        <section className="container__lista">
            <div className="lista__head">
                <h3>Resumo financeiro</h3>
                <nav>
                    <button className="button button__todos">Todos</button>
                    <button className="button button__entradas">Entradas</button>
                    <button className="button button__saidas">Saídas</button>
                </nav>
            </div>
            <ul>
                {                
                listTransactions.map((transaction, i) => <Card transaction={transaction} key={i} id={i} />)
                }                 
            </ul>
        </section>
    )
}

export default Lista