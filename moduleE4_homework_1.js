// Задание 1
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
// только собственных свойств. Данная функция не должна возвращать значение.

const argument = {
    property1: 1,
    property2: 'Two'
};

function getArg(arg) {
    for (let key in arg) {
        if (arg.hasOwnProperty(key)) {
            console.log(`${key} = ${arg[key]}`)
        }
    }
}

getArg(argument)
