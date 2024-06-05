import shrimps from '../../assets/shrimps.jpg';
import lobster from '../../assets/lobster.jpg';
import crabs from '../../assets/friedCrab.jpg';
import sushi from '../../assets/sushi.jpg';

import breakfast1 from '../../assets/breakfast1.jpg';
import breakfast2 from '../../assets/breakfast2.jpg';
import lunch1 from '../../assets/lunch1.jpg';
import lunch2 from '../../assets/lunch2.jpg';

import { v4 as uuidv4 } from 'uuid'
// -------- Favorite Meals --------------/

export const favMealArray = [
    {
        id: uuidv4(),
        foodImg: shrimps,
        foodName: "Jumbo Shrimps"
    },
    {
        id: uuidv4(),
        foodImg: lobster,
        foodName: "Grilled Lobster"
    },
    {
        id: uuidv4(),
        foodImg: crabs,
        foodName: "Crispy Crabs"
    },
    {
        id: uuidv4(),
        foodImg: sushi,
        foodName: "Chinese Sushi"
    }
];

export const featuredItemsArr = [
    {
        id: uuidv4(),
        img: breakfast1,
        category: "breakfast",
        name: "Café Crème & Boulangerie Bread",
        description: "",
        price: 22.50,
        quantity: 0

    },
    {
        id: uuidv4(),
        img: breakfast2,
        category: "breakfast",
        name: "Pancakes à la Fraise",
        description: "",
        price: 12.50,
        quantity: 0

    },
    {
        id: uuidv4(),
        img: lunch1,
        category: "lunch",
        name: "Fried Chicken",
        description: "",
        price: 20.00,
        quantity: 0
    },
    {
        id: uuidv4(),
        img: lunch2,
        category: "lunch",
        name: "Burger and Chips",
        description: "",
        price: 18.00,
        quantity: 0
    }

]

