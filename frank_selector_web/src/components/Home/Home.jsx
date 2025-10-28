import Style from '../Home/Home.module.css'



export default function Home () {
    return (
        <section id="Home" className={Style.section_home}>
            <h1>FRANK SELECTOR</h1>
            <hr />
            <h2>Leandro Carlos, 43 anos Dj de vinil, <br />
                Rock MPB, Reggae e muitos outros <br />
                estilos!
            </h2>
            <br />
            <button className={Style.botao_contato}>Contato</button>
        </section>
    )
}