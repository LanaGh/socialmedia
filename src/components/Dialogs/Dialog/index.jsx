import style from "./style.module.scss";
import classNames from 'classnames/bind';
import { NavLink } from "react-router-dom";

let cx = classNames.bind(style);

const Dialog = (props) => {
  let path = '/dialogs/' + props.dialogsInfo.id
  return (
    (props.dialogsInfo.id !== props.myId) &&(   
      <div className={cx('item-dialog')}>
      <NavLink activeClassName={cx('item-dialog--active')} to={path}>
        <div className={cx('item-dialog__icon')}> <img src={props.dialogsInfo.avatar} alt="img person message"/> </div>
        <div className={cx('item-dialog__name')}> <h3>{props.dialogsInfo.name}</h3> </div>
      </NavLink>
      </div>
    )
  )
}

export default Dialog;