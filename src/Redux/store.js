// import addFormsReducer from "./addForms-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

// import { rerenderentireTree } from "../render";
// const ADD_TEXT = 'ADD-TEXT';
// const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state : {
    profilePage : {
      users : [
        {
          id : 1,
          name : 'Lana',
          surname : 'Ghazaryan',
          email : 'lanaghazaryan1@gmail.com',
          password : '123',
          status : 'Admin',
          description : "I'm 25 years old. I'm Armenian. I'm from in Yerevan.",
          avatar : "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_long_hair_beautiful_people_woman_teenager_avatar-512.png"
        },
        {
          id : 2,
          name : 'Sati',
          surname : 'Ghazaryan',
          email : 'sati@mail.com',
          password : '123',
          status : 'student',
          description : "I'm 27 years old. I'm Armenian. I'm from in Yerevan.",
          avatar : "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_long_hair_beautiful_people_woman_teenager_avatar-512.png"
        },
        {
          id : 3,
          name : 'Gevorg',
          surname : 'Muradyan',
          email : 'gev@gmail.com',
          password : '123',
          status : 'student',
          description : "I'm 27 years old. I'm Armenian. I'm from in Yerevan.",
          avatar : "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-512.png"
        },
        {
          id : 4,
          name : 'Van',
          surname : 'Vardanyan',
          email : 'van@gmail.com',
          password : '123',
          status : 'student',
          description : "I'm 27 years old. I'm Armenian. I'm from in Yerevan.",
          avatar : "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-512.png"
        }
      ],
      posts : [
        {
          id : 1,
          userId : 1,
          likes : 10,
          post : "Hello my friends, my name is Lana, i'm 25 years old.",
          url : "https://cdn2.iconfinder.com/data/icons/social-media-2403/200/post-on-instagram-1--post-instagram-PHOTO-PICTURE-SOCIAL-MEDIA-WOMAN-STORIES-STORY-PHONE-MOBILE-APP-512.png"
        },
        {
          id : 2,
          userId : 1,
          likes : 10,
          post : "Hello my friends, my name is Lana, i'm 25 years old.",
          url : "https://cdn2.iconfinder.com/data/icons/social-media-2403/200/post-on-instagram-1--post-instagram-PHOTO-PICTURE-SOCIAL-MEDIA-WOMAN-STORIES-STORY-PHONE-MOBILE-APP-512.png"
        },
        {
          id : 3,
          userId : 2,
          likes : 7,
          post : "Hello my friends, my name is Sati, i'm 27 years old.",
          url : "https://cdn2.iconfinder.com/data/icons/social-media-2403/200/post-on-instagram-1--post-instagram-PHOTO-PICTURE-SOCIAL-MEDIA-WOMAN-STORIES-STORY-PHONE-MOBILE-APP-512.png"
        },
        {
          id : 4,
          userId : 3,
          likes : 5,
          post : "Hello my friends, my name is Gev, i'm 27 years old.",
          url : "https://cdn2.iconfinder.com/data/icons/social-media-2403/200/checking-phone-3--checking-phone-SOCIAL-MEDIA-CHECK-TEXT-MESSAGE-MOBILE-APP-CHAT-NOTIFICATION-MAN-512.png"
        }
      ],
      newPostText : 'newPostText'
    },
    dialogPage : {
      dialogs : [
        {
          id : 1,
          name : "Lana"
        }
      ],
      messages : [
        { 
          id : 1,
          userId : 1,
          toId : 2,
          messages : "hello Sati. How are you ?"
        },
        { 
          id : 2,
          userId : 2,
          toId : 1,
          messages : "Hi Lana. I'm fine. How are you ?"
        },
        { 
          id : 3,
          userId : 2,
          toId : 3,
          messages : "Hi Gev. How are you my husband?"
        },
        { 
          id : 4,
          userId : 1,
          toId : 3,
          messages : "Hi Gev. How are you my husband?"
        },
        { 
          id : 5,
          userId : 3,
          toId : 1,
          messages : "Hi Gev. How are you my husband?"
        }
      ],
      newMessageBody : 'newMessageBody'
    },
    unitsPage : {
      unit : [
        {
          id : 1,
          name : "Bible",
          direction : "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
          video : "https://www.youtube-nocookie.com/embed/Ao0Pt-8_GYM",
          text : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus vitae quaerat ducimus odit, assumenda, 
                  libero eveniet ullam, laboriosam dolore labore nihil. Velit sint natus rerum doloribus quam ratione unde.`,
          teacherId : 1
        }
      ]
    },
    navBar : {
      nav : [
        {
          id : 1,
          url : "/home",
          name : "Home"
        },
        {
          id : 2,
          url : "/profile",
          name : "Profile"
        },      
        {
          id : 3,
          url : "/dialogs",
          name : "Dialogs"
        },
        {
          id : 4,
          url : "/lessaos",
          name : "Lessons"
        },
        {
          id : 5,
          url : "/video",
          name : "Video"
        },
        {
          id : 6,
          url : "/settings",
          name : "Settings"
        }
      ]
    }
  
  },
  getState() {
    return this._state;
  },
  // addPost(postMessage){
  //   let newPost = {
  //     id : 6,
  //     userId : 3,
  //     likes : 0,
  //     post : postMessage,
  //     url : "https://cdn2.iconfinder.com/data/icons/social-media-2403/200/post-on-instagram-1--post-instagram-PHOTO-PICTURE-SOCIAL-MEDIA-WOMAN-STORIES-STORY-PHONE-MOBILE-APP-512.png"
  //   };
  //   state.profilePage.posts.push(newPost);
  //   rerenderentireTree(state);
  // },
  // let rerenderentireTree = () => {console.log('state');},
 
  _callSubscriber(state) {
    this._state.subscribe(state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    // this._state = addFormsReducer(this._state, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action) 
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._callSubscriber(this._state);

    // if (action.type === ADD_TEXT) {
    //   let newPost = {
    //     id : 6,
    //     userId : 3,
    //     likes : 0,
    //     post : this._state.profilePage.newPostText,
    //     url : "https://cdn2.iconfinder.com/data/icons/social-media-2403/200/post-on-instagram-1--post-instagram-PHOTO-PICTURE-SOCIAL-MEDIA-WOMAN-STORIES-STORY-PHONE-MOBILE-APP-512.png"
    //   };
     
    //   let newMessageBody = {
    //     id : 6,
    //     userId : 2,
    //     toId : 3,
    //     messages : this._state.dialogPage.newMessageBody
    //   }
    //   if(action.pageName === "newPostText") {
    //     this._state.profilePage.posts.push(newPost) 
    //     this._state.profilePage.newPostText = '';
    //   } else if(action.pageName === "newMessageBody"){
    //     this._state.dialogPage.messages.push(newMessageBody);
    //     this._state.dialogPage.newMessageBody = '';
    //   }
    //   this._callSubscriber(this._state);
    // } 
    // else if (action.type === UPDATE_NEW_TEXT) {
    //   action.pageName === "newPostText" ?  this._state.profilePage.newPostText = action.text : this._state.dialogPage.newMessageBody = action.text
    //   this._callSubscriber(this._state);
    // }
    // else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.dialogPage.newMessageBody = action.text;
    //   this._callSubscriber(this._state);
    // }
  }
}
// export const addPostActionCreator = (pageName) => ({
//   type : pageName === "newPostText" ? ADD_POST : ADD_MESSAGE,
//   pageName : pageName
// })
// export const updateNewTextActionCreater = (text, pageName) => ({
//   type : pageName === "newPostText" ? UPDATE_NEW_POST : UPDATE_NEW_MESSAGE,
//   pageName : pageName,
//   text : text
// })

export default store;
window.store = store;