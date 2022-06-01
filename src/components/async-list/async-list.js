import React, { useEffect, useState } from 'react';

const foodList = ['Hamburguer', 'Pizza', 'Tacos'];

const fakeApiCall = () => new Promise((resolve) => 
setTimeout(resolve(foodList), 2000));

export default function AsynList() {
    
    const [foodData, setFoodData] = useState([]);

    useEffect(
        () => {fakeApiCall(). then((data) => setFoodData(data)), []}
    );

    return foodData.map((name) => <p key={name}>{name}</p>);
}