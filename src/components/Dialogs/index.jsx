import style from "./style.module.scss";
import classNames from 'classnames/bind'
import Dialog from "./Dialog";
import Messages from "./Messages";
// import AddForm from "../AddForm";
import AddFormContainer from "../AddForm/AddFormContainer";

let cx = classNames.bind(style);

const Dialogs = (props) => {

  console.log('Dialogs', props);

  let myId = 3
  let myDialogs = props.dialogs.messages.filter( elem => elem.userId === myId || elem.toId === myId );

  return (
    <main className={cx('dialogs')}>
      <div className={cx('dialogs__title')}>
        <h2>Dialogs</h2>
      </div>
      <div className={cx('dialogs__main')}>
        <div className={cx('item-dialogs')}>
          {props.profile.map(elem => <Dialog key={elem.id} dialogsInfo={elem} myId={myId} /> )}
        </div>
        <Messages 
          messages={myDialogs} 
        />
      </div>
      <AddFormContainer
          newMessageBody={props.dialogs.newMessageBody} 
          dispatch={props.dispatch}
          page="Dialogs"
      />
    </main>
  )
}

export default Dialogs;