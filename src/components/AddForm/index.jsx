import React from 'react';
import style from './style.module.scss'
import classNames from 'classnames/bind'

let cx = classNames.bind(style);

const AddForm = (props) => {

  console.log('AddForm', props);

  // let newElement = React.createRef();
  let onAddText = () => {
    props.addText(); 
  }
  let onChange = (e) => {
    // debugger
    let text = e.target.value;
    // let text = newElement.current.value;
    props.updateNewText(text);
  }
  return (
    <div className={cx('PostForm')} >
      <form >
        <textarea onChange={onChange} value ={props.newText} 
              //  ref={newElement} 
               type="text" placeholder="write your text" />
        <button type='button' onClick={onAddText}>SEND</button>
      </form>
    </div>
  )
}

export default AddForm;