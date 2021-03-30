import style from './style.module.scss'
import classNames from 'classnames/bind'

let cx = classNames.bind(style);

const MyPosts = (props) => {
  return (
    <div className={cx('post')} >
      <div className={cx('post__icon')} > <img src={props.postInfo.url} alt=""/> </div>
      <div className={cx('post__text')}>
        <p> {props.postInfo.post} </p>
      </div>
    </div>
  )
}

export default MyPosts;