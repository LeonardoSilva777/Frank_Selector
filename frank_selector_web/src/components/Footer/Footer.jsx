import Style from '../Footer/Footer.module.css'
import Logo from '../../assets/img/Logo_frank.png'


export default function Footer(){
    return(
        <footer>
            <div className={Style.logo}>
                <img src={Logo} alt="Logo Frank Eventos" className={Style.logo} />  
            </div>

            
            <div className={Style.links}>
                <h3>Navegação</h3>
                <ul>
                    <li><a href="#eventos">Próximos Eventos</a></li>
                    <li><a href="#sobre">Sobre Nós</a></li>
                    <li><a href="#locais">Locais Parceiros</a></li>
                    <li><a href="#contato">Fale Conosco</a></li>
                </ul>
            </div>

           
            <div className={Style.contato_info}>
                <h3>Contato</h3>
                <p>E-mail: contato@frankeventos.com.br</p>
                <p>Telefone: (11) 98765-4321</p>
                <p>Endereço: Rua Fictícia, 123 - Centro, São Paulo/SP</p>
            </div>

           
            <div className={Style.redes_sociais}>
                <h3>Siga-nos</h3>
                <div className={Style.icones}>
                    <a href="https://www.instagram.com/frank_selector" target="_blank" rel="noopener noreferrer">Instagram</a> | 
                    <a href="https://www.facebook.com/leandro.pereiradasilva.395" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </div>

        </footer>
    )
}