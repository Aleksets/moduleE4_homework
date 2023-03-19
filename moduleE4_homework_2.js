//Задание 2
//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
// есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const argument = {
    property1: 1,
    property2: 'Two'
};

function getArg(prop, arg) {
    return (prop in arg)
}

console.log(getArg("property2", argument));
console.log(getArg("property3", argument));
