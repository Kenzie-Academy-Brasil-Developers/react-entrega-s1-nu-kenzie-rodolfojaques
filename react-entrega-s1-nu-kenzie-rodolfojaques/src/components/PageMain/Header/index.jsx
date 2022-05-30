import Logo from "../../../assets/NuKenzie2.png"
import './style.css'

function Header({pageOut}){


    return (
        <header>
            <img src={Logo}/>
            <button onClick={pageOut}>Inicio</button>
        </header>
    )
}

export default Header