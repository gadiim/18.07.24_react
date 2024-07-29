import React from 'react';

function CitiesList({ cities }) {
    return (
        <>
            {cities.map((city, index) => (
                <div className="cities-list" key={index}><b>{city.name}</b>
                    <li>population: <i>{city.population} people</i></li>
                    <li>landmark: <i>{city.landmark}</i></li>
                </div>

            ))}

        </>
    );
}

export default CitiesList;

