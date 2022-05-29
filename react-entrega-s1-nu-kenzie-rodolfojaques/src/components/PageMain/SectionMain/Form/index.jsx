
import './style.css'

function Form(){

    return (
        <section className='sec1'>
            <form>
                <div className='descricao'>
                    <label htmlFor='description'>Descrição</label>
                    <input name="description" type="text" placeholder="Digite aqui sua descrição"/>
                    <span>Ex: Compra de roupas</span>
                </div>
                <div className='valor-e-tipo'>
                    <div className='inputs__valor inputs__valor--number'>
                        <label htmlFor="valor">Valor</label>
                        <input type='number'/>
                    </div>
                    <div className='inputs__valor inputs__valor--select'>
                        <label htmlFor="entrada">Tipo de valor</label>
                        <select name="entrada">
                            <option value="entrada" >Entrada</option>
                            <option value="saida">Saída</option>
                        </select>
                    </div>
                    
                </div>
                <button>Inserir Valor</button>
            </form>
            <section className='valorEmConta'>
                <div className='valorEmConta--header'>
                    <h3>Valor total:</h3>
                    <span className='valorRend'>$<span> ....</span></span>
                </div>
                <p>O valor se refere ao saldo</p>
            </section>
        </section>

    )
}

export default Form
