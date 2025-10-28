import Style from '../Sobre/Sobre.module.css'
import Leandro from '../../assets/img/FRANKSELECTOR.webp'

export default function Sobre(){
    return (
        <section id="Sobre" className={Style.section_sobre}>
            <aside className={Style.textos}>
                <h1>Meu nome é Leandro </h1>
                <hr className={Style.linha_azul}></hr>
                <p>
                 E aí! Sou o Leandro Pereira da Silva, 46 anos, de São Mateus, no Leste de São Paulo. Se tem uma coisa que me define é o
                bom humor e a paixão por música.
                <br />
                <br />
                Até 2018, minha vida era na gráfica, rodeado de papel e tinta. Era o meu ganha-pão desde 2010.
                Mas, no fundo, faltava o ritmo que me move de verdade. A grande virada veio quando decidi seguir o coração e me tornar DJ de vinil.
                <br />
                <br />
                Larguei a máquina de impressão e abracei a magia dos toca-discos. Hoje, uso meus bolachões para contar histórias e garantir 
                que a pista dance.
                <br />
                <br />
                Eu não sou só um DJ; sou o Leh, que leva a vida na risada. De São Mateus para a cabine, minha missão é simples:
                espalhar boa música e garantir um sorriso no seu rosto!   
                </p>

                <button className= {Style.Contato}>ENTRE EM CONTATO</button>
            </aside>

            <aside className= {Style.images}>
                <div className= {Style.quadrado1}></div>
                <img src={Leandro} className={Style.leh} alt="Leandro" />
                <div className= {Style.quadrado2}></div>
            </aside>
        </section>
    )
}