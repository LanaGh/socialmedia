import style from './style.module.scss'
import classNames from 'classnames/bind'

let cx = classNames.bind(style);

const Profile = (props) => {
  return (
      <div className={cx('main__account', 'profile')} >
        <div className={cx('profile__avatar')} >
          <img src={props.info.avatar} alt=""/>
        </div>
        <div className={cx('profile__description')} >
          <h3>{props.info.name + " "  + props.info.surname}</h3>
          <p>{props.info.description}</p>
        </div>
      </div>
  );
}

export default Profile;


