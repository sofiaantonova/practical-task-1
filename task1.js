function getTotalAge (users){
    // переменная для подсчета общего возраста пользователей
    let total_age = 0;
    // прохождение по массиву users методом map и прибавление возраста каждого пользователя к total_age
    users.map(x => total_age += x.age);
    // возвращение общего возраста пользователей
    return total_age;
};

function getUsersStreets (users){
    // возвращение массива улиц сформированного методом map доставая их из объекта address поле street
    return users.map(x => x.address.street);
};


function getOldPeople (users){
    // возвращение массива пользователей старше 60, созданного методом filtred
    return users.filter(user => user.age > 60);
};

// массив пользователей для задания 1
const users_1 = [
    {name: "Valera", age: 40, address: {city: "St. Petersburg", street: "Lomonosov descent", building: 99}}, 
    {name: "Vyacheslav", age: 15, address: {city: "Dorokhovo", street: "Lenina Ave.", building: 20}},
    {name: "Yaroslav", age: 27, address: {city: "Krasnogorsk", street: "pl. 1905 year", building: 86}},
    {name: "Illarion", age: 79, address: {city: "Balashikha", street: "Kosmonavtov highway", building: 93}},
    {name: "Alisa", age: 18, address: {city: "Krasnogorsk", street: "Gogol highway", building: 79}},
    {name: "Stanislav", age: 61, address: {city: "Dmitrov", street: "Gagarin Ave.", building: 81}}
];

console.log(getTotalAge(users_1));
console.log(getUsersStreets(users_1));
console.log(getOldPeople(users_1));