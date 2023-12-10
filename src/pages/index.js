import Head from 'next/head';
import Footer from '../components/footer'
import styles from '../styles/components.module.css';
import Header from '@/components/header';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title> Meu app - Home </title>
      </Head>
      <Header/>
      <div className={styles.main}>
        <main>
        <h2> Página Inicial</h2>
          <p className={styles.paragrafo}>Esse site é meu Trabalho do segundo bimestre de frameworks 2,
          aqui você vai encontrar uma lista de nome de personagens da turma da mônica e uma breve descrição 
          do personagem! tudo utilizando a API do site <a  className={styles.link}  href='https://www.bocaweb.com.br'>bocaweb</a></p>
          <form action='/objetos'>
                <button className={styles.button} type="submit">Ver Lista</button>
            </form>
        </main>
      </div>
      <Footer />
    </div>
  )
}

