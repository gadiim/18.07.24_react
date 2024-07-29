import React, { useState } from 'react';
import Form from './task_4/Form';
import MyButton from './task_4/EditButton';


function App4() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
  };

  return (
    <fieldset className='App4'>
      <legend>TASK 4</legend>
      <MyButton handleClick={handleClick} />
      <h4>cities of your country</h4>
      <hr></hr>
      <Form isActive={isActive} />
    </fieldset>
  );
}

export default App4;