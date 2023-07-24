import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
import logo from './../imagens/logo192.png'
import Container from './Container';

function Navbar() {

    return (
        <nav className={styles.topo}>
        <Container>
            <Link to="/">
                <img className={styles.img} src={logo} alt="Home"/>
            </Link>

            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Início</Link></li>
                <li className={styles.item}><Link to="/">Portfólio</Link></li>
                <li className={styles.item}><Link to="/">Contato</Link></li>
            </ul>
        </Container>
        </nav>
    )
}

export default Navbar