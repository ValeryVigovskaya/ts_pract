// **Описание**: Создайте кортеж с фиксированными типами
const cortegeArray: [number, string, number] = [10, "hi", 50];
console.log(cortegeArray[0]);
console.log(cortegeArray[1]);
console.log(cortegeArray[2]);
// **Описание**: Создайте массив чисел с явной типизацией
const arrNumbers: number[] = [15, 8, 23, 4, 16, 42, 11].sort((a, b) => a - b);
console.log(arrNumbers[arrNumbers.length - 1]);

// **Описание**: Создайте enum для статусов заказа и выведите значение одного из статусов в консоль
enum Statuses {
  PENDING = 1,
  PROCESSING = 2,
  SHIPPED = 3,
  DELIVERED = 4,
}
console.log(Statuses.DELIVERED);

// **Описание**: Создайте объект
// с типизированными свойствами для хранения информации о книге и выведите каждое свойство отдельно
const someObject: { title: string; pages: number; inStock: boolean } = {
  title: "1984",
  pages: 328,
  inStock: true,
};
console.log(someObject.title);
console.log(someObject.pages);
console.log(someObject.inStock);

// **Описание**: Создайте readonly массив строк и
// попытайтесь изменить один из его элементов для демонстрации защиты от модификации

let stringArray: readonly string[] = ["1", "2", "3"];

// stringArray[0] = "5";

console.log(
  stringArray,
  "Ошибка измкенения:Index signature in type 'readonly string[]' only permits reading.",
);

// **Описание**: Создайте функцию с типизированными
// параметрами для вычисления площади прямоугольника и выведите результат в консоль
function createAreaRectangle(width: number, height: number): number {
  return width * height;
}

console.log(createAreaRectangle(5, 8));

// **Описание**: Создайте функцию с
// типизированными параметрами для проверки четности числа и выведите результат проверки в консоль

function isEven(number: number): boolean {
  if (number % 2 == 0) {
    return true;
  } else return false;
}

console.log(isEven(5));

// **Описание**: Создайте union type для типизации переменной, которая может
// содержать либо строку, либо число, и выведите значения разных типов в консоль

type TStringOrNumber = string | number;
let value1: TStringOrNumber = "Hello";
let value2: TStringOrNumber = 42;
console.log(value1, value2);

//полная типизация

let sum = 5 + "5";

//реализация классов
class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  displayInfo() {
    return console.log(`Товар: ${this.name}, Цена: ${this.price} руб.`);
  }
}

class BankAccount {
  private _balance: number;
  constructor(balance: number) {
    this._balance = balance;
  }

  deposit(amount: number) {
    this._balance = this._balance + amount;
  }
  getBalance() {
    return this._balance;
  }
}

class Student {
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  public get info(): string {
    return `Студент: ${this._name}, возраст: ${this._age} лет`;
  }
}

class Car {
  model: string;
  mileage: number;
  constructor(model: string, startMileage: number) {
    this.model = model;
    this.mileage = startMileage;
  }

  addMileage(km: number) {
    this.mileage = this.mileage + km;
  }
  getMileage() {
    return this.mileage;
  }
}

class Book {
  private _isRead: boolean;
  name: string;
  constructor(nameBook: string, startStatus: boolean) {
    this._isRead = startStatus;
    this.name = nameBook;
  }

  public set isRead(v: boolean) {
    this._isRead = v;
  }

  public get isRead(): boolean {
    return this._isRead;
  }
}

class Player {
  private _number: number;
  playerName: string;
  constructor(playerName: string, startNumber: number) {
    this._number = startNumber;
    this.playerName = playerName;
  }

  public set number(v: number) {
    this._number = v;
  }

  public get number(): number {
    return this._number;
  }
}

class Task {
  title: string;
  completed: boolean;
  constructor(title: string, completed: boolean) {
    this.title = title;
    this.completed = completed;
  }
  static markCompleted(task: Task) {
    task.completed = true;
  }

  getStatus() {
    return this.completed ? "Выполнено" : "Не выполнено";
  }
}

class Calculator {
  constructor() {}
  add(a: number, b: number) {
    return a + b;
  }
  subtract(a: number, b: number) {
    return a - b;
  }
  multiply(a: number, b: number) {
    return a * b;
  }
}

class Counter {
  count: number;
  constructor(count: number) {
    this.count = count;
  }
  increment() {
    this.count += 1;
  }
  getValue() {
    return this.count;
  }
}

class Timer {
  name: string;
  isRunning: boolean;
  constructor(name: string) {
    this.name = name;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
  }
  stop() {
    this.isRunning = false;
  }
  getStatus() {
    return this.isRunning ? "Запущен" : "Остановлен";
  }
}
