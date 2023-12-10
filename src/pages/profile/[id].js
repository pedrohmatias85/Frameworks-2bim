import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from '@/styles/components.module.css';

function Profile({ user = {} }) {
    return (
        <div className={styles.home}>
            <Header></Header>
            <div className={styles.main}>
                <p className={styles.paragrafo}>{user.nome}</p>
                <p className={styles.paragrafo}>{user.descricao}</p>
                <p>enviado por:  {user.usuario}</p>
                <form action='/objetos'>
                    <button className={styles.button} type="submit">Voltar</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=monica')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})

export async function getStaticPaths() {
    
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=monica')
    const repo = await res.json()
    const nomes = await repo;
    const paths = nomes.map((nomes,id) =>{
      return {params:{id:String(id)}};
    });

    return {
        paths,
        fallback: false,
    };
}    

export default Profile;
