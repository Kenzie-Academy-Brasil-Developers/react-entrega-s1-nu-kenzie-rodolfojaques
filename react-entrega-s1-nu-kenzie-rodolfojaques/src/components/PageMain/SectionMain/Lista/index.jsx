import './style.css'
import Card from './Card'
import { useEffect,useState } from 'react'

function Lista({listTransactions,setListTransactions}){

    const [listFilter,setListFilter] = useState([])
    const [listEnt,setListEnt] = useState([])
    const [listSaida,setListSaida] = useState([])
    const [listTodos,setListTodos] = useState([])

    useEffect(()=>{
        setListFilter(listTransactions)
    },[listTransactions])

    useEffect(()=>{

        setListEnt(listTransactions.filter(transac => transac.type === "entrada"))
        setListSaida(listTransactions.filter(transac => transac.type === "saída"))        
        setListTodos(listTransactions)
    },[listTransactions])

    const handleClickFilter = (e) => {

        if(e.target.textContent === 'Todos'){

           setListFilter(listTodos) 
        }else if(e.target.textContent === 'Entradas'){

            setListFilter(listEnt) 
        }else if(e.target.textContent === 'Saídas'){

            setListFilter(listSaida) 
        }
    }

    const deleteItem= (e)=> {

        const comp = Number(e.target.parentNode.parentNode.parentNode.id)

        setListTransactions(listTransactions.filter(item => item.id !== comp))
    }

    
    return (
        <section className="container__lista">
            <div className="lista__head">
                <h3>Resumo financeiro</h3>
                <nav>
                    <button onClick={handleClickFilter} className="button button__todos">Todos</button>
                    <button onClick={handleClickFilter} className="button button__entradas">Entradas</button>
                    <button onClick={handleClickFilter} className="button button__saidas">Saídas</button>
                </nav>
            </div>
            <ul>
                {                
                listFilter.map((transaction) => <Card deleteItem={deleteItem} transaction={transaction} key={transaction.id} id={transaction.id} />)
                }                 
            </ul>
        </section>
    )
}

export default Lista