import style from "./style.module.scss";
import classNames from 'classnames/bind'

let cx = classNames.bind(style);

const Message = (props) => {
  return (
    <div className={cx('item-message')} key={props.message.id} >
      {/* <div className={cx('item-messages__img')}> <img src="" alt="img"/> </div> */}
      <div key={props.message.id} className={cx('item-message__message')}> <p> {props.message} </p> </div>
    </div>
  );
}

export default Message;