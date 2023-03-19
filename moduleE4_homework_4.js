//Задание 4
//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
//Выбрав прибор, подумайте, какими свойствами он обладает.
//План:
//1.Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
//2.Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
//3.У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//4.Создать экземпляры каждого прибора.
//5.Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
//Общие требования:
//1.Имена функций, свойств и методов должны быть информативными.
//2.Соблюдать best practices:
//- использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
//- информативные имена (а не a, b);
//- четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
//- использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.

// Создаём функцию-конструктор электрических устройств
function ElectricDevice(model, powerConsumption){
    this.isOn = false
    this.model = model
    this.powerConsumption = powerConsumption
}

// Создаём метод функции-конструктора электрических устройств - включение/выключение
ElectricDevice.prototype.pushOnOff = function(){
    this.isOn ? this.isOn = false : this.isOn = true
}

// Создаём класс электрических устройств - настольная лампа
function TableLamp(model, colorOfLight, lowPowerConsumption, maxPowerConsumption){
    this.model = model
    this.powerConsumption = lowPowerConsumption
    this.colorOfLight = colorOfLight
    this.lowPowerConsumption = lowPowerConsumption
    this.maxPowerConsumption = maxPowerConsumption
    this.highPowerMode = false
}

// Наследуем для настольной лампы свойства и методы функции-конструктора электрических устройств
TableLamp.prototype = new ElectricDevice()

// Создаём метод для настольной лампы - переключение режима энергопотребления
TableLamp.prototype.changePowerMode = function(){
    this.highPowerMode ? (
        this.powerConsumption = this.lowPowerConsumption,
            this.highPowerMode = false
    ) : (
        this.powerConsumption = this.maxPowerConsumption,
            this.highPowerMode = true
    )
}

// Создаём класс электрических устройств - компьютер
function Computer(model, maxPowerConsumption, processor, videoCard, memoryCapacity, os){
    this.model = model
    this.powerConsumption = maxPowerConsumption
    this.processor = processor
    this.videoCard = videoCard
    this.memoryCapacity = memoryCapacity
    this.os = os
}

// Наследуем для компьютера свойства и методы функции-конструктора электрических устройств
Computer.prototype = new ElectricDevice()

// Создаём метод для компьютера - смена операционной системы
Computer.prototype.changeOs = function(){
    this.os === 'Windows' ? this.os = 'Linux' : this.os = 'Windows'
}

// Создаём функцию подсчёта общей потребляемой мощности включенных устройств
function totalPowerConsumption(){
    let totalPowerConsumption = 0
    for (let device of arguments){
        if (device.isOn){
            totalPowerConsumption += device.powerConsumption
        }
    }
    console.log(`Общая потребляемая мощность включённых устройств ${totalPowerConsumption} ватт`)}

// Создаём lamp1 - экземпляр класса настольных ламп
let lamp1 = new TableLamp('RX1', 'green', 5, 15)
// Создаём computer1 - экземпляр класса компьютеров
let computer1 = new Computer('be quiet! 01-2023', 1000, 'Intel Core i5 10600', 'RTX 3060Ti', 64, 'Windows')

// Выводим в консоль созданные экземпляры классов
console.log(lamp1)
console.log(computer1)
// включаем оба устройства (лампа в режиме электросбережения) и считаем общую потребляемую мощность
lamp1.pushOnOff()
computer1.pushOnOff()
totalPowerConsumption(lamp1, computer1)
// переводим лампу в режим высокого потребеления (компьютер продолжает работать) и считаем общую потребляемую мощность
lamp1.changePowerMode()
totalPowerConsumption(lamp1, computer1)
// отключаем лампу (компьтер продолжает работать) и считаем общую потребляемую мощность
lamp1.pushOnOff()
totalPowerConsumption(lamp1, computer1)
// отключаем компьтер и считаем общую потребляемую мощность
computer1.pushOnOff()
totalPowerConsumption(lamp1, computer1)
