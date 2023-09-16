// массив поьлзователей для задания 2
const users_2 = [
    {id: 0, name: "Valera", age: 40},
    {id: 1, name: "Vyacheslav", age: 15},
    {id: 2, name: "Yaroslav", age: 27},
    {id: 3, name: "Illarion", age: 79},
    {id: 4, name: "Alisa", age: 18},
    {id: 5, name: "Stanislav", age: 60},
];

// "стрелочная" функция возврещающая случайную задержку
const getRundomDelay = () => {
    // переменная минимального значения случайной задержки 
    let min = 1000;
    // переменная максимального значения случайной задержки 
    let max = 5000;
    // возвращение округленного случайного значения полученного с Math.random 
    return Math.floor(Math.random() * (max - min) + min);
}

async function sleep(sleep_time){
    // возвращение функции-конструкторы Promise, 
    // которая производит  resolve  через  заданное  количество  мимлисекунд
    return new Promise(resolve => {
        setTimeout(() => {
          resolve("resolve");
        }, sleep_time);
      });
}

async function getUser(user_id, users = users_2){
    // получение случайной значения 
    let delay = getRundomDelay();
    // ожидание выполнения Promise возврщаемого функцией sleep
    await sleep(delay);
    // возвращение объекта пользователя найденого методом find
    return users.find(user => user.id === user_id);
}

async function loadUsersSquentially(users = users_2){
    // синхронный перебор массива пользователей
    for (let user of users){
        // получение случайного значения 
        let delay = getRundomDelay();
        // ожидание выполнения Promise возврщаемого функцией sleep
        await sleep(delay);  
        // вывод в консоль сообщения 
        console.log(`Загружен пользователь с id ${user.id} и именем ${user.name}`);
    }
}

async function loadUsersInParallel(users = users_2){
    // ассинхронный перебор массива пользователей
    users.forEach(async user => {
        // получение случайного значения 
        let delay = getRundomDelay();
        // ожидание выполнения Promise возврщаемого функцией sleep
        await sleep(delay);
        // вывод в консоль сообщения 
        console.log(`Ассинхронно загружен пользователь с id ${user.id} и именем ${user.name}`);
    });
}

getUser(4).then(user => console.log(user));
loadUsersSquentially();
loadUsersInParallel();