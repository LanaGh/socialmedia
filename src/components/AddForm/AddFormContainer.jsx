import { addMessageActionCreator, updateNewMessageActionCreater } from '../../Redux/dialogs-reducer';
import { addPostActionCreator, updateNewPostActionCreater } from '../../Redux/profile-reducer';
import AddForm from '.';
import StoreContext from '../../Redux/StoreContext';

const AddFormContainer = (props) => {
  console.log('AddFormContainer',props); // petqa ga {newText, dispatch}

  return (
    <StoreContext.Consumer>
      { (store) => {
          console.log('Lanahvhvh',store)
          let state = store.getState();

          let newText;
          props.page === "Dialogs" ? newText = state.dialogsPage.newMessageBody  : newText = state.profilePage.newPostText

          
          let addText = () => {
            props.page === "Dialogs" ? store.dispatch(addMessageActionCreator()) : store.dispatch(addPostActionCreator()) 
          }
          let onChange = (text) => {
            let action = props.page === "Dialogs" ? updateNewMessageActionCreater(text) : updateNewPostActionCreater(text);
            store.dispatch(action);
          }
          return <AddForm 
            // updateNewText={onChange} addText={addText} newText={newText} 
            updateNewText={onChange} addText={addText} newText={newText} 
          />
      }
      }
    </StoreContext.Consumer>
  ) 
    
}

export default AddFormContainer;



