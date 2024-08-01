import React, { useState } from 'react';
import initialData from './initialData';

function RegistrationForm() {
    const [formData, setFormData] = useState(...initialData);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleReset = () => {
        setFormData(...initialData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();


        const newErrors = {};
        if (!formData.nickname) {
            newErrors.nickname = 'input text';
        }
        else if (!/^[a-zA-Z]+$/.test(formData.nickname.trim())) {
            newErrors.nickname = 'incorrect';
        };
        if (!formData.email) {
            newErrors.email = 'input email';
        }
        else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())) {
            newErrors.email = 'incorrect';
        };
        if (!formData.gender) {
            newErrors.gender = 'select gender';
        };
        if (!formData.age) {
            newErrors.age = 'input age';
        }
        else if (formData.age < 18) {
            newErrors.age = 'must be 18 years or older';
        };
        
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert(
                "nickname:   " + formData.nickname + "\n"
                + "email:   " + formData.email + "\n"
                + "gender:   " + formData.gender + "\n"
                + "age:   " + formData.age + "\n"
            );
            console.log(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='registration-container'>
            <div>
                <input
                    type="text"
                    id="nickname"
                    name="nickname"
                    placeholder='nickname'
                    value={formData.nickname}
                    onChange={handleChange}
                />
                <label htmlFor="nickname">{errors.nickname ? <p className="error-message">{errors.nickname}</p> : <p className="valid-message">nickname</p>}</label>
            </div>
            <div>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="email">
                    {errors.email ? 
                    <p className="error-message">{errors.email}
                    </p> 
                    : 
                    <p className="valid-message">email
                    </p>}
                    </label>
            </div>
            <div>          
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
                <label htmlFor="gender">{errors.gender ? 
                    <p className="error-message">{errors.gender}
                    </p> 
                    : 
                    <p className="valid-message">gender</p>}
                    </label>
            </div>
            <div>
                <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="age"
                    min="1"
                    value={formData.age}
                    onChange={handleChange}
                />
                <label htmlFor="age">
                    {errors.age ?
                        <p className="error-message">{errors.age}
                        </p>
                        :
                        <p className="valid-message">age
                        </p>}
                </label>
            </div>
            <div>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>    
            </div>      
        </form>
    );
}

export default RegistrationForm;
