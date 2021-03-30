import style from './style.module.scss'
import classNames from 'classnames/bind'
import NavLinkMenu from './NavLinkMenu';

let cx = classNames.bind(style);

const Nav = (props) => {
  return (
    <nav className={cx('nav')}>
      {props.nav.map( elem => <NavLinkMenu url={elem.url} name={elem.name} key={elem.id} /> )}
    </nav>
  );
}

export default Nav;