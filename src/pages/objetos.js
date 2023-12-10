import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import styles from '../styles/components.module.css'
import Link from 'next/link';


export default function Turma({objeto}) {
    return (
        <div className={styles.home}>
            <Header></Header>
            
            <h1> Turma da Mônica</h1>
            <h4> lista de personagens</h4>
            <div className={styles.main}> 
                {objeto.map((objeto, id) => (
                    <Link className={styles.link}  href='/profile/[id]' as={`/profile/${id}`}>
                        <div key={objeto.id}> <p> {objeto.nome} </p> </div>
                    </Link>
                ))}
            </div>
            <Footer class></Footer>
        </div>
    )
}



export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=monica')
    const repo = await res.json()
        return { props: { objeto: repo } }
    })


