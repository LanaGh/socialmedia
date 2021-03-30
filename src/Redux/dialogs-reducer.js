const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {   
    case ADD_MESSAGE : 
      let newMessageBody = {
        id : 6,
        userId : 2,
        toId : 3,
        messages : state.newMessageBody
      }
      state.messages.push(newMessageBody);
      state.newMessageBody = '';
      return state;
    case UPDATE_NEW_MESSAGE :
      state.newMessageBody = action.text
      return state;
    default:
      return state;
  } 
}

export const addMessageActionCreator = () => ({
  type : ADD_MESSAGE
})
export const updateNewMessageActionCreater = (text) => ({
  type : UPDATE_NEW_MESSAGE,
  text : text
})

export default dialogsReducer;