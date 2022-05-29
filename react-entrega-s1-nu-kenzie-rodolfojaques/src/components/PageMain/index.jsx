import Header from "./Header"
import './style.css'
import SectionMain from "./SectionMain"

function PageMain({setPage}){

    const pageOut = (e) => {

        e.preventDefault()
        setPage(false)
    }

    return (
        <main className="main2">
            <Header pageOut={pageOut}/>
            <SectionMain/>
        </main>
    )
}

export default PageMain