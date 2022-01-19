// const tableau = [1,2,3,4,5]
// console.log(tableau[2]);


let pays = [
    ['Paraguay','Brésil','Argentine','Surinam'],
    ['Asuncion','Brasília','Buenos Aires','Paramaribo']
]

pays[0].splice(2,1);
pays[1].splice(2,1);

let add = ['espagnol', 'portugais','asian']

pays.splice(2,0, add);

console.log(pays);
