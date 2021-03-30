import style from './style.module.scss'
import classNames from 'classnames/bind'
import Posts from './Posts';
import Profile from './Profile';

let cx = classNames.bind(style);

const Main = (props) => {
  console.log("Main",props);
  let myUser = props.profile.users[2];
  let myPosts = props.profile.posts.filter( elem => elem.userId === myUser.id );

  return (
    <main className={cx('main')}>
      <Profile info={myUser} />
      <Posts 
             state={props.state}
             posts={myPosts} 
             newPostText={props.profile.newPostText} 
             dispatch={props.dispatch}   
      />
    </main>
  );
}

export default Main;


