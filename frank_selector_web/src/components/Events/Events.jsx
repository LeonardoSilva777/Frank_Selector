import Style from '../Events/Events.module.css'
import {FaInstagram } from 'react-icons/fa';

export default function Events() {
    
    const curio = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.4248148131853!2d-46.54543511157395!3d-23.6455555974431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42c4a80ec53f%3A0xb8e08212944845c2!2sO%20CURI%C3%93%20BAR%20E%20RESTAURANTE!5e0!3m2!1spt-BR!2sbr!4v1761537460331!5m2!1spt-BR!2sbr"
    const manaca = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.00935310366!2d-46.42386031756435!3d-23.711360031615662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6ced58c4c90f%3A0xaf8f8989ad16f7ab!2sManac%C3%A1%20Queijaria!5e0!3m2!1spt-BR!2sbr!4v1761539391683!5m2!1spt-BR!2sbr"

    return(
        <section className={Style.section_eventos}>

            <h1>Locais dos Eventos</h1>

            <div className={Style.Org}>
                <div className= {Style.Locais}>
                    <div className={Style.texts}>
                        <h1> Ocurió Bar </h1>
                        <p>O Curió nasceu em 2011 para ter comida boa </p>
                    </div>
                    <a 
                        href="https://www.instagram.com/ocuriobar" 
                        className={Style.social}
                        style={{color: 'rebeccapurple'}}
                        >
                            <FaInstagram size={30} />
                        {}
                    </a>
                    <iframe 
                        src={curio} 
                        width="450" 
                        height="270" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                    ></iframe>
                </div>

            <div className= {Style.Locais}>
                <div className={Style.texts}>
                    <h1> Manacá Queijaria </h1>
                    <p>Queijos artesanais, Vinhos brasileiros & Afins</p>
                </div>
                <a 
                    href="https://www.instagram.com/manacaqueijaria" 
                    className={Style.social}
                    style={{color: 'rebeccapurple'}}
                    >
                        <FaInstagram size={30} />
                    {}
                </a>
                
                <iframe 
                    src={manaca} 
                    width="450" 
                    height="270" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                ></iframe>
            </div>
            </div>
            
        </section>
    )
}