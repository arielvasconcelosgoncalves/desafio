import s from './querodoar.module.scss'
import livro from '../../assets/livro_titulo.png'



export default function QueroDoar(){

    return(
        <main className={s.main}>
        <section className={s.section1}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
        </section>
        <section className={s.section2}>
            <div>
                <img src={livro} alt="" />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
        </main>
    );

}