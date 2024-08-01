// import './App.css';
// import React, { useState } from 'react';

// class UserForm extends React.Component {
//   constructor(props) {
//     super(props);
//     var name = props.name;
//     var age = props.age;

//     var nameIsValid = this.validateName(name);
//     var ageIsValid = this.validateAge(age);

//     this.state = { name: name, age: age, nameIsValid: nameIsValid, ageIsValid: ageIsValid };

//     this.onNameChange = this.onNameChange.bind(this);

//     this.onAgeChange = this.onAgeChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   validateName(name) {
//     return name.length > 2;
//   }

//   validateAge(age) {
//     return age >= 0;
//   }

//   onNameChange(e) {
//     var val = e.target.value;
//     var validName = this.validateName(val);
//     this.setState({ name: val, nameIsValid: validName });
//   }

//   onAgeChange(e) {
//     var val = e.target.value;
//     var validAge = this.validateAge(val);
//     this.setState({ age: val, ageIsValid: validAge });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.state.ageIsValid === true && this.state.nameIsValid === true) {
//       alert("User`s name is " + this.state.name + " Age: " + this.state.age);
//     }
//   }

//   render() {
//     var nameColor = this.state.nameIsValid ? "green" : "red";
//     var ageColor = this.state.ageIsValid ? "green" : "red";
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>Name:</label><br />
//         <input type='text' value={this.state.name} onChange={this.onNameChange} style={{ borderColor: nameColor }}></input><br />
//         <label>Age:</label><br />
//         <input type='text' value={this.state.age} onChange={this.onAgeChange} style={{ borderColor: ageColor }}></input><br />
//         <input type='submit' value="Submit"></input>
//       </form>
//     );
//   }
// }

// export default function App2() {

//   return (
//     <>
//       <UserForm name="Undefined" age="18"></UserForm>
//     </>
//   );
// }

////////////////////////

// import React, { useState } from 'react';

// function UserForm({ name = "Undefined", age = 18 }) {
//   const [nameValue, setNameValue] = useState(name);
//   const [ageValue, setAgeValue] = useState(age);
//   const [nameIsValid, setNameIsValid] = useState(validateName(name));
//   const [ageIsValid, setAgeIsValid] = useState(validateAge(age));

//   const   
//  validateName = (name) => name.length > 2;
//   const validateAge = (age) => age >= 0;

//   const handleNameChange = (event) => {
//     const val = event.target.value;
//     const validName = validateName(val);
//     setNameValue(val);
//     setNameIsValid(validName);
//   };

//   const handleAgeChange = (event) => {
//     const val = event.target.value;
//     const validAge = validateAge(val);
//     setAgeValue(val);
//     setAgeIsValid(validAge);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (ageIsValid && nameIsValid) {
//       alert(`User's name is ${nameValue}, Age: ${ageValue}`);
//     }
//   };

//   const nameColor = nameIsValid ? "green" : "red";
//   const ageColor = ageIsValid ? "green" : "red";

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Name:</label>
//       <br />
//       <input
//         type="text"
//         value={nameValue}
//         onChange={handleNameChange}
//         style={{ borderColor: nameColor }}
//       />
//       <br />
//       <label>Age:</label>
//       <br />
//       <input
//         type="text"
//         value={ageValue}
//         onChange={handleAgeChange}
//         style={{ borderColor: ageColor }}
//       />
//       <br />
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }

// function App2() {
//   return (
//     <div>
//       <UserForm />
//     </div>
//   );
// }

// export default App2;

////////////////////////////

