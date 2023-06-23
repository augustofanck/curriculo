import styles from '../src/Home.module.css';


import Navbar from './estrutura/Navbar';
import Container from '../src/estrutura/Container'


function Home() {

    return (

    <div className={styles.estrutura}>
            <Navbar/>
            <Container>
                <div className={styles.homeHeader}>
                    <h2>Sobre mim</h2>
                </div>
            </Container>
                <div className={styles.homeContent}>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
    </div>
    )
}

export default Home