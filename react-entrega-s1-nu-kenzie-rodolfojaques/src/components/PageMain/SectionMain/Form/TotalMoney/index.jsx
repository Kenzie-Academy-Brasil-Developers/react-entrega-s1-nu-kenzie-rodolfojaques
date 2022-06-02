
function TotalMoney({listTransactions}){

    return (
        <section className='valorEmConta'>
            <div className='valorEmConta--header'>
                <h3>Valor total:</h3>
                <span className='valorRend'>$ <span>{listTransactions.reduce((a,b) => a + b.value,0)}</span></span>
            </div>
            <p>O valor se refere ao saldo</p>
        </section>
    )
}

export default TotalMoney