# Практическое занятие 1

## Задание 1

### Задание
Создайте  массив  пользователей  произвольного  размера,  у  пользователя  должны  быть  поля  имя,  возраст,  адрес  (в  адресе  указан  город,  улица,  дом)

```javascript
const users_1 = [
    {name: "Valera", age: 40, address: {city: "St. Petersburg", street: "Lomonosov descent", building: 99}}, 
    {name: "Vyacheslav", age: 15, address: {city: "Dorokhovo", street: "Lenina Ave.", building: 20}},
    {name: "Yaroslav", age: 27, address: {city: "Krasnogorsk", street: "pl. 1905 year", building: 86}},
    {name: "Illarion", age: 79, address: {city: "Balashikha", street: "Kosmonavtov highway", building: 93}},
    {name: "Alisa", age: 18, address: {city: "Krasnogorsk", street: "Gogol highway", building: 79}},
    {name: "Stanislav", age: 60, address: {city: "Dmitrov", street: "Gagarin Ave.", building: 81}}
]
```

---

### Задание

Напишите  функцию  getTotalAge,  которая  принимает  массив  пользователей  и  возвращает  их  общий  возраст,  приведите  пример  использования

### Реализация

```javascript
function getTotalAge (users){
    // переменная для подсчета общего возраста пользователей
    let total_age = 0;
    // прохождение по массиву users методом map и прибавление возраста каждого пользователя к total_age
    users.map(x => total_age += x.age);
    // возвращение общего возраста пользователей
    return total_age;
};
```

### Пример использования

Подобную функцию можно использовать для расчета общей суммы чека

---

### Задание

Напишите  функцию  getUsersStreets,  которая  принимает  массив  пользователей  и  возвращает  список  названий  улиц,  приведите  пример  использования

### Реализация

```javascript
function getUsersStreets (users){
    // возвращение массива улиц сформированного методом map доставая их из объекта address поле street
    return users.map(x => x.address.street);
};
```

### Пример использования

Подобную функцию можно использовать для формированния массива данных из строк массива объекта

---

### Задание

Напишите  функцию  getOldPeople,  которая  принимает  массив  пользователей  и  возвращает  список  пользователей,  возраст  которых  более  60,  приведите  пример  использования

### Реализация

```javascript
function getOldPeople (users){
    // создание пустого массива old_peple
    let old_peple = [];
    // перебор массива users при помощи метода forEach 
    users.forEach(element => {
        // проверка возраста каждого пользователя, в случае если пользователю больше 60 добавление его в массив old_peple
        if(element.age > 60) old_peple.push(element);
    });
    // возвращение массива пользователей старше 60
    return old_peple;
};
```

### Пример использования

Подобную функцию можно использовать для сортировки массива объектов

## Задание  2

### Задание

Создайте  массив  пользователей  произвольного  размера,  у  пользователя  должны  быть  поля  ID,  имя,  возраст.

### Реализация

```javascript
const users_2 = [
    {id: 0, name: "Valera", age: 40},
    {id: 1, name: "Vyacheslav", age: 15},
    {id: 2, name: "Yaroslav", age: 27},
    {id: 3, name: "Illarion", age: 79},
    {id: 4, name: "Alisa", age: 18},
    {id: 5, name: "Stanislav", age: 60},
]
```

---

### Задание

Напишите  функцию  sleep,  которая  принимает  количество  секунд,  и  возвращает  promise,  который  производит  resolve  через  заданное  количество  секунд

### Реализация

```javascript
async function sleep(sleep_time){
    // возвращение функции-конструкторы Promise, 
    // которая производит  resolve  через  заданное  количество  мимлисекунд
    return new Promise(resolve => {
        setTimeout(() => {
          resolve("resolve");
        }, sleep_time);
      });
}
```

---

### Задание

Напишите  функцию  getUser,  которая  принимает  ID  пользователя  и  возвращает  пользователя  с  заданным  ID  из  созданного  массива  пользователей  через  некоторое  время  (эмуляция  удаленной  загрузки)  с  помощью  функции  sleep

### Реализация

```javascript
async function getUser(user_id, users = users_2){
    // получение случайной значения 
    let delay = getRundomDelay();
    // ожидание выполнения Promise возврщаемого функцией sleep
    await sleep(delay);
    // возвращение объекта пользователя найденого методом find
    return users.find(user => user.id === user_id);
}
```

---

### Задание

Напишите  функцию  loadUsersSquentially,  которая  принимает  массив  идентификаторов  пользователей  и  загружает  их  последовательно,  приведите  пример  использования

### Реализация

```javascript
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
```

### Пример использования

---

### Задание

Напишите  функцию  loadUsersInParallel,  которая  принимает  массив  идентификаторов  пользователей  и  загружает  их  параллельно,  приведите  пример  использования

### Реализация

```javascript
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
```

### Пример использования

Подобную функция будет полезна при обработке массива файлов, что бы файлы меньшего размера быстрее прочитались и обработали полученные данные

---
