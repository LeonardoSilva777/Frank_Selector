import Style from '../Music/Music.module.css'
import Racionais from '../../assets/img/Racionais.jpg'
import Tim from '../../assets/img/Tim Maia.jpg'
import Pentagono from '../../assets/img/Pentagono.jpg'
import Bob from '../../assets/img/bob marley.jpg'

export default function Music() {
    return (
        <section id="Musicas" className={Style.section_musica}>
            <h1>Musicas Mais Tocadas</h1>
            <hr className={Style.linha_azul}></hr>

            <div className= {Style.musicas}>
                <div className={Style.albuns}>
                    <img src={Racionais} alt="Racionais" />
                    <h3>Racionais MC</h3>
                </div>
                <div className={Style.albuns}>
                    <img src={Bob} alt="Racionais" />
                    <h3>Bob Marley</h3>
                </div>
                <div className={Style.albuns}>
                    <img src={Pentagono} alt="Racionais" />
                    <h3>Pentagono</h3>
                </div>
                <div className={Style.albuns}>
                    <img src={Tim} alt="Racionais" />
                    <h3>Tim Maia</h3>
                </div>
            </div>


            <div className= {Style.botoes}>
                <button className={Style.ver_mais}>VER MAIS</button>
                <button className={Style.indique}>INDIQUE UMA MUSICA</button>
            </div>
        </section>
    )
}