import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import initialCities from './initialCities';
import CitiesList from './CitiesList';

function Form({ isActive }) {
    const { register, handleSubmit, reset } = useForm();
    const [cities, setCities] = useState(initialCities);



    const onSubmit = (data) => {
        setCities([...cities, data]);
        reset();
        const form = document.getElementById('city-form');
        form.classList.add('city-form-hidden');
    };

    const handleReset = () => {
        reset();
        setCities(initialCities);
    };

    const handleSkip = () => {
        const form = document.getElementById('city-form');
        form.classList.add('city-form-hidden');
    };

    return (
        <div>
            <form
                id="city-form"
                onSubmit={handleSubmit(onSubmit)}
                className={isActive ? "city-form" : "city-form-hidden"}
            >
                <div className='city-items'>
                    <div>
                        <label>name</label>
                        <input id="name" {...register("name")} />
                    </div>
                    <div>
                        <label>population</label>
                        <input id="population" {...register("population")} />
                    </div>
                    <div>
                        <label>landmark</label>
                        <input id="landmark" {...register("population")} />
                    </div>
                </div>
                <button type="submit">Add</button>
                <button type="button" onClick={handleSkip}>Skip</button>
            </form>
            <CitiesList cities={cities} />
            <button className="resetBtn" type="button" onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Form;