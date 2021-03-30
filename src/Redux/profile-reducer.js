const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id : 6,
        userId : 3,
        likes : 0,
        post : state.newPostText,
        url : "https://cdn2.iconfinder.com/data/icons/social-media-2403/200/post-on-instagram-1--post-instagram-PHOTO-PICTURE-SOCIAL-MEDIA-WOMAN-STORIES-STORY-PHONE-MOBILE-APP-512.png"
      };
      state.posts.push(newPost) 
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST :
      state.newPostText = action.text
      return state;
    default:
      return state;
  } 
}

export const addPostActionCreator = () => ({
  type : ADD_POST
})
export const updateNewPostActionCreater = (text) => ({
  type : UPDATE_NEW_POST,
  text : text
})

export default profileReducer;