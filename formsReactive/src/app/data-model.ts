export class Hero {
    id =  0;
    name = '';
    address: Address[];
}

export class Address
{
    street = '';
    city = '';
    state = '';
    zip = '';
}

export const heroes: Hero[] = [

    {
        id: 1,
        name: 'Gandalf',
        address : [
        {street: 'Bolsón Cerrado', city: 'La Comarca', state: 'CA', zip : '3001'},
        {street: 'Minas Tirith', city: 'Gondor', state: 'AB', zip : '3001'}
        ]
     },
     {
        id: 2,
        name: 'Frodo',
        address : [
        {street: 'Bolsón Cerrado', city: 'La Comarca', state: 'MD', zip : '3001'}
        ]
     },
     {
        id: 2,
        name: 'Sam',
        address : []
     }
]

     export const states = ["CA","MD", "AB"];

