import React from 'react';
import edit from './edit.svg';


function MyButton({ handleClick }) {
    return <button className='addBtn' onClick={handleClick}>
        <img src={edit} alt="Edit" />
    </button>;
}
export default MyButton;
