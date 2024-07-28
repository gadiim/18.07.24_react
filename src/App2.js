import React, { useState } from 'react';
import Form from './task_2/Form';
import MyButton from './task_2/EditButton';


function App2() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
  };

  return (
    <fieldset className='task-2'>
      <legend>TASK 2</legend>
      <MyButton handleClick={handleClick} />
      <h4>cities of your country</h4>
      <hr></hr>
      <Form isActive={isActive} />
    </fieldset>
  );
}

export default App2;