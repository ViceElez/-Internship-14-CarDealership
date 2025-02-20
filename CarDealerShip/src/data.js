import { v4 as uuid } from 'uuid';

const Cars=[
    {
    id:uuid(),
    mark:"Toyota",
    model:"Corolla",
    type:"Sedan",
    releaseYear:2021,
    regExpireDate:"2022-12-31"
    },
    {
    id:uuid(),
    mark:"Honda",
    model:"Civic",
    type:"Sedan",
    releaseYear:2022,
    regExpireDate:"2023-12-31"
    },
    {
    id:uuid(),
    mark:"Suzuki",
    model:"Swift",
    type:"Coupe",
    releaseYear:2021,
    regExpireDate:"2022-12-31"
    },
    {
    id:uuid(),
    mark:'Toyota',
    model:'Yaris',
    type:'SUV',
    releaseYear:2021,
    regExpireDate:'2022-12-31'
    }
];

export {Cars};
