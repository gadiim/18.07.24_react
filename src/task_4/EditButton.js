import React from 'react';
import edit from './edit.svg';


function MyButton({ handleClick }) {
    return <button className='editBtn' onClick={handleClick}>
        <img src={edit} alt="Edit" />
    </button>;
}
export default MyButton;

// function EditButton({ onClick }) {
//     return (
//         <button className='editBtn' onClick={onClick}>
//             <img src={edit} alt="Edit" />
//         </button>
//     );
// }

// export default EditButton;
