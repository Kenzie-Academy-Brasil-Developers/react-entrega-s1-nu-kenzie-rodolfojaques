import Form from "./Form"
import Lista from "./Lista"
import './style.css'

function SectionMain({listTransactions,setListTransactions}){

    return (
        <section className="section__main">
            <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            />
            <Lista
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            />
        </section>
    )
}

export default SectionMain