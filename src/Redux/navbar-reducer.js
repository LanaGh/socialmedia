let initialState = {
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

const navbarReducer = (state = initialState, action) => {
  return state;
}

export default navbarReducer;