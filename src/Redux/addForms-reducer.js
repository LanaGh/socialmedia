const ADD_TEXT = 'ADD-TEXT';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

const addFormsReducer = (state, action) => {

  if (action.type === ADD_TEXT) {
    let newPost = {
      id : 6,
      userId : 3,
      likes : 0,
      post : state.profilePage.newPostText,
      url : "https://cdn2.iconfinder.com/data/icons/social-media-2403/200/post-on-instagram-1--post-instagram-PHOTO-PICTURE-SOCIAL-MEDIA-WOMAN-STORIES-STORY-PHONE-MOBILE-APP-512.png"
    };
   
    let newMessageBody = {
      id : 6,
      userId : 2,
      toId : 3,
      messages : state.dialogPage.newMessageBody
    }
    if(action.pageName === "newPostText") {
      state.profilePage.posts.push(newPost) 
      state.profilePage.newPostText = '';
    } else if(action.pageName === "newMessageBody"){
      state.dialogPage.messages.push(newMessageBody);
      state.dialogPage.newMessageBody = '';
    }
  } 
  else if (action.type === UPDATE_NEW_TEXT) {
    action.pageName === "newPostText" ?  state.profilePage.newPostText = action.text : state.dialogPage.newMessageBody = action.text
  }

  return state;
}

export default addFormsReducer;