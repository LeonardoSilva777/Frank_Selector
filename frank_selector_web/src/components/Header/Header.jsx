import Style from '../Header/Header.module.css'
import Logo from '../../assets/img/Logo_frank.png'
import { FaFacebook, FaInstagram } from 'react-icons/fa';


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
            <div className={Style.redes_sociais}>
                <div className={Style.redes}>
                    {}
                    <a 
                    href="https://www.facebook.com/leandro.pereiradasilva.395" 
                    className={Style.social}
                    style={{color: 'rebeccapurple'}}
                    >
                        <FaFacebook size={30} />
                    {}
                    </a>
    
                    <a 
                    href="https://www.instagram.com/frank_selector" 
                    className={Style.social}
                    style={{color: 'rebeccapurple'}}
                    >
                        <FaInstagram size={30} />
                    {}
                    </a>
                </div>
            </div>
        </header>
    )
}