import styles from '../paginas/Home.module.css';
import Navbar from '../estrutura/Navbar';
import Container from '../estrutura/Container'


function Home() {

    return (

    <div className={styles.estrutura}>
            <Navbar/>
            <Container>
                <div className={styles.homeHeader}>
                    <h1>Augusto Fanck - Desenvolvedor</h1>
                </div>
            </Container>
            <Container>
                    <div className={styles.formHorizontal}>
                        <div className={styles.leftCol}>
                            <h2 className={styles.sobreTitulo}>Sobre mim</h2>
                            <p className={styles.homeContent}>Me chamo Augusto, tenho 22 anos e atualmente sou um programador junior com foco na desenvoltura dos conhecimentos já obtidos com projetos pessoais. Sou estagiário em uma empresa com o desenvolvimento ativo de um sistema ERP de gestão empresarial voltada ao ramo funerário. Programo nas linguagens PHP, React e JavaScript. Estou cursando o segundo semestre de Análise e Desenvolvimento de Sistemas.</p>
                        </div>
                        <div className={styles.rightCol}>
                            <h2 className={styles.sobreTitulo}>Informações</h2>
                            <ul className={styles.homeContent}>
                                <li>
                                    Estudante de Análise e Desenvolvimento de Sistemas pela UNOPAR;
                                </li>
                                <br></br>
                                <li>
                                    Atualmente programando nas linguagens: PHP, JavaScript e React;
                                </li>
                                <br></br>
                                <li>
                                    Estagiário em J&O Software
                                </li>
                                <br></br>
                            </ul>
                        </div>
                    </div>
            </Container>
    </div>
    )
}

export default Home