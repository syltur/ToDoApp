import styles from './Navbar.module.scss';
import Container from '../Container/Container';

const Navbar = () => {
    return (<nav>
      <Container>
            <div className={styles.navbarInner}>
                <a href='/'>
                    <i className={'fa fa-tasks'}></i>
                </a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Favorite">Favorite</a></li>
                    <li><a href="/About">About</a></li>
                </ul>

            </div>
        </Container>
    </nav>
    )
};

export default Navbar;