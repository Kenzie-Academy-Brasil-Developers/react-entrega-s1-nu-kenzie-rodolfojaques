import './style.css'
import imgK from "../../assets/NuKenzie.png"
import img1 from "../../assets/Ellipse4.png"
import img2 from "../../assets/Ellipse5.png"
import img3 from "../../assets/Ellipse6.png"
import cardImg from "../../assets/credit-card.png"

function Inicio({setPage,valueTotal}){

    const pageIn = (e) => {

        e.preventDefault()

        setPage(true)
    }
    

    return (
        <main>
            <div className="main">
                <div className="main__msg">
                    <img src={imgK} alt="Logo Nu Kenzie" />
                    <h1>Centralize o controle das suas finanças</h1>
                    <h5>de forma rapida e segura</h5>
                    <button onClick={pageIn}>Iniciar</button>
                </div>
                <div className="main__simbol">
                    <div className="main__simbol--cont1">
                        <div className="main__simbol--cont2">
                            <div className="main__simbol--cont3"></div>
                        </div>
                    </div>
                </div>
                <div className="main__simbol--contMain">
                    <div className="vetores">
                        <img src={img1} className="vetor" />
                        <img src={img2} className="vetor" />
                        <img src={img3} className="vetor" />
                    </div>
                    <div className="faixa__grey"></div>
                    <div className="faixa__grey"></div>
                    <div className="faixa__grey"></div>
                    <div className="faixa__grey"></div>
                    <div className="faixa__grey"></div>
                    <div className="faixa__grey"></div>                    
                    <div className="modal modal__green">
                        <div className='divImg--green'>
                            <img className='imgPink' src={cardImg}/>
                        </div>
                        <div>
                            <div className="faixa1"></div>
                            <div className="faixa2"></div>
                        </div>
                    <div className="modal modal__pink">
                        <div className='divImg--pink'>
                            <img className='imgGreen' src={cardImg}/>
                        </div>
                        <div>
                            <div className="faixa1"></div>
                            <div className="faixa2"></div></div>                                    
                    </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Inicio