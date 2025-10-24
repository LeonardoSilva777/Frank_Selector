import Style from '../Header/Header.module.css'
import Logo from '../../assets/img/Logo_frank.png'


export default function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo simbolo da paz" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Leandro</a>
                <a href="#">Musicas</a>
                <a href="#">Contato</a>
            </nav>
            <div className={Style.redes}>

            </div>
        </header>
    )
}