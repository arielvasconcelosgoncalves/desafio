import s from './querodoar.module.scss'
import livro from '../../assets/livro_titulo.png'



export default function QueroDoar(){

    return(
        <main className={s.main}>
        <section className={s.section1}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
        </section>
        <form className={s.section2}>
            <section className={s.sectionimg}>
                <img src={livro} alt="" />
            </section>
        <section action="" className={s.section3}>
            <div>
                <input type="text" name='' id='' placeholder='Título' />
            </div>
            <div>
                <input type="text" name='' id='' placeholder='Categoria' />
            </div>
            <div>
                <input type="text" name='' id='' placeholder='Autor' />
            </div>
            <div>
                <input type="text" name='' id='' placeholder='Link da Imagem' />
            </div>
        </section>
        <section className={s.section4}>
            <button type='Submit'>Doar</button>
        </section>
        </form>
        </main>
    );

}