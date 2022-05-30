import { useState } from 'react'
import './style.css'
let identifica = 0
function Form({listTransactions,setListTransactions}){

    const [descricao,setDescricao] = useState('')
    const [valor,setValor] = useState(0)
    const [type,setType] = useState('')
    

    const getInfos = (e) => {

        e.preventDefault()

        type === 'saída' ? 
        setListTransactions([...listTransactions,{description: descricao, type: type, value: Number(`-${valor}`), ident: identifica}])
        :
        setListTransactions([...listTransactions,{description: descricao, type: type, value: valor, ident: identifica}]);
    }

    return (
        <section className='sec1'>
            <form>
                <div className='descricao'>
                    <label htmlFor='description'>Descrição</label>
                    <input onChange={(e) => setDescricao(e.target.value)} name="description" type="text" placeholder="Digite aqui sua descrição"/>
                    <span>Ex: Compra de roupas</span>
                </div>
                <div className='valor-e-tipo'>
                    <div className='inputs__valor inputs__valor--number'>
                        <label htmlFor="valor">Valor</label>
                        <input onChange={(e) => setValor(Number(Number(e.target.value).toFixed(2)))} type='number'/>
                    </div>
                    <div className='inputs__valor inputs__valor--select'>
                        <label htmlFor="entrada">Tipo de valor</label>
                        <select onChange={(e) => setType(e.target.value)} name="entrada">
                            <option value="entrada">Entrada</option>
                            <option value="saída">Saída</option>
                        </select>
                    </div>
                    
                </div>
                <button onClick={getInfos}>Inserir Valor</button>
            </form>
            <section className='valorEmConta'>
                <div className='valorEmConta--header'>
                    <h3>Valor total:</h3>
                    <span className='valorRend'>$ <span>{listTransactions.reduce((a,b) => a + b.value,0)}</span></span>
                </div>
                <p>O valor se refere ao saldo</p>
            </section>
        </section>

    )
}

export default Form
