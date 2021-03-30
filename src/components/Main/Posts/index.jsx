import style from './style.module.scss'
import classNames from 'classnames/bind'
import MyPosts from './MyPosts';
// import AddForm from '../../AddForm';
import AddFormContainer from '../../AddForm/AddFormContainer';
// import store from '../../../Redux/store';

let cx = classNames.bind(style);

const Posts = (props) => {

  console.log('Posts', props);

  // let state = props.state 
  // let myPosts = props.profile.posts.filter( elem => elem.userId === myUser.id );

  return (
    <div>
    {/* form */}
      <AddFormContainer 
              // state={store}
              newPostText={props.newPostText} 
              dispatch={props.dispatch}
              page="Posts" 
      />
      {/* show posts */}
      <div className={cx('posts')} >
        <div> <h3>My Posts</h3> </div>
        {props.posts.map( elem => <MyPosts postInfo={elem} key={elem.id} /> )}
      </div>
    </div>
  )
}

export default Posts;