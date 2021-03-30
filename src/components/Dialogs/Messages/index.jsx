import style from "./style.module.scss";
import classNames from 'classnames/bind'
import Message from "./Message";

let cx = classNames.bind(style);

const Messages = (props) => {
  return (
    <div className={cx('item-messages')}>
      {props.messages.map(elem => <Message message={elem.messages} key={elem.id} />  )}
    </div>
  );
}

export default Messages;