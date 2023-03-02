import Container from '../Container/Container';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.navbarInner}>
          <a href='/'>
            <i className={'fa fa-tasks'}></i>
          </a>
          <ul>
            <li>
                <NavLink className={({ isActive }) => 
                isActive ? styles.linkActive : undefined
                } to='/'> Home </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                } to='/favorite'> Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                } to='/about' > About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
