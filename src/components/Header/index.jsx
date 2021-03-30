import logo from './../../logo.png'
import style from './style.module.scss'
import classNames from 'classnames/bind'

let cx = classNames.bind(style);

const Header = () => {
  return (
    <header className={cx('header')}> 
      <div>
        <img src={logo} alt=""/>
      </div>
      <div>
        <h1>Աստվածաշնչյան դպրոց</h1>
      </div>
      <div>
        <form>
          <input type="text" placeholder="search text" />
          <button>search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;