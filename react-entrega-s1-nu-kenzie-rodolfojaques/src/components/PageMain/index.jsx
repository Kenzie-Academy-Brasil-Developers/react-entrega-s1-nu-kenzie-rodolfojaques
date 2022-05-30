import Header from "./Header"
import './style.css'
import SectionMain from "./SectionMain"

function PageMain({setPage,listTransactions,setListTransactions}){

    const pageOut = (e) => {

        e.preventDefault()
        setPage(false)
    }

    return (
        <main className="main2">
            <Header pageOut={pageOut}/>
            <SectionMain
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            />
        </main>
    )
}

export default PageMain