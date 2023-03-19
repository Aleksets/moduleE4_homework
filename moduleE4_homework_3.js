//Задание 3
//Написать функцию, которая создает пустой объект, но без прототипа.

function newObj() {
    return Object.create(null)
}

let newObj1 = newObj()
console.log(newObj1)