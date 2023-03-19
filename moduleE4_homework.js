// Создаём родительский класс электрических устройств
class ElectricDevice {
    constructor(model, powerConsumption) {
        this.isOn = false;
        this.model = model;
        this.powerConsumption = powerConsumption;
    }
    // Создаём метод класса электрических устройств - включение/выключение
    pushOnOff() {
        this.isOn ? this.isOn = false : this.isOn = true
    }
}

// Создаём дочерний класс электрических устройств - настольная лампа
class TableLamp extends ElectricDevice {
    constructor(model, colorOfLight, lowPowerConsumption, maxPowerConsumption) {
        super(model, lowPowerConsumption);
        this.colorOfLight = colorOfLight;
        this.lowPowerConsumption = lowPowerConsumption;
        this.maxPowerConsumption = maxPowerConsumption;
        this.highPowerMode = false;
    }
    // Создаём метод для настольной лампы - переключение режима энергопотребления
    changePowerMode() {
        this.highPowerMode ? (
            this.powerConsumption = this.lowPowerConsumption,
                this.highPowerMode = false
        ) : (
            this.powerConsumption = this.maxPowerConsumption,
                this.highPowerMode = true
        )
    }
}

// Создаём дочерний класс электрических устройств - компьютер
class Computer extends ElectricDevice {
    constructor(model, maxPowerConsumption, processor, videoCard, memoryCapacity, os) {
        super(model, maxPowerConsumption);
        this.processor = processor;
        this.videoCard = videoCard;
        this.memoryCapacity = memoryCapacity;
        this.os = os;
    }
    // Создаём метод для компьютера - смена операционной системы
    changeOs() {
        this.os === 'Windows' ? this.os = 'Linux' : this.os = 'Windows'
    }
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
