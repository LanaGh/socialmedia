import style from './style.module.scss'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom';

let cx = classNames.bind(style);

const NavLinkMenu = (props) => {
  return (
    <div className={cx('nav__item')} >
      <NavLink to={props.url} activeClassName={cx('nav__item--active')}>{props.name}</NavLink>
    </div>
  );
}

export default NavLinkMenu;