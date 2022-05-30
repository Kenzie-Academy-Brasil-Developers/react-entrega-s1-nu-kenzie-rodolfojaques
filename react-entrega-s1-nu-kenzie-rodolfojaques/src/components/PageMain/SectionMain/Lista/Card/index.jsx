import trash from "../../../../../assets/trash.png"
import './style.css'

function Card({transaction,id},{key}){

    const {description, type, value} = transaction

    return (

        <li key={id} id={id} className="card__item">            
            <div className="description__card">
                {type === "entrada" ? 
                <><div style={{background:"#03B898"}} 
                className="faixa__status"></div></> 
                : 
                <div style={{background:"#E9ECEF"}} 
                className="faixa__status"></div>
                }
                <div className="description__card--text">
                    <h3>{description}</h3>
                    <span>{type}</span>
                </div>

            </div>
            <div className="action__card">
                <p>R$ {value}</p>
                <div className="base__img">
                    <img src={trash}/>
                </div>
            </div>
        </li>
    )
}

export default Card