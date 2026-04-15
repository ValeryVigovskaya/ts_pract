// **Описание**: Создайте тип, где все поля интерфейса
// Product становятся необязательными, и объявите переменную этого типа

interface Product {
  id: number;
  name: string;
  price: number;
}

type PartialProduct = Partial<Product>;

const ProductObj: PartialProduct = { id: 3 };

// Создайте тип, где все поля интерфейса User становятся
// обязательными, и объявите переменную этого типа
interface IUser {
  name?: string;
  email?: string;
  age?: number;
}

type RequiredUser = Required<IUser>;

const UserObj: RequiredUser = { name: "Петр", email: "exampe.com", age: 2 };

// **Описание**: Создайте тип, который исключает поле 'password'
//  из интерфейса Account, и объявите переменную этого типа

interface Account {
  id: number;
  username: string;
  email: string;
  password: string;
}

type TAccount = Omit<Account, "password">;

const AccountObj: TAccount = { id: 3, username: "John", email: "sss" };

// **Описание**: Создайте тип, который извлекает только
// строковые типы из объединения, и объявите переменную этого типа

type Status = "pending" | "completed" | "error" | 404 | 500 | true | false;

type TStatusString = Extract<Status, string>;

const StatusObj: TStatusString = "pending";

// **Описание**: Создайте тип, который исключает числовые
// типы из объединения, и объявите переменную этого типа

type EventType =
  | "click"
  | "hover"
  | "focus"
  | 200
  | 404
  | "submit"
  | "load"
  | 500;

type TEventType = Exclude<EventType, number>;

const EventTypeObj: TEventType = "click";

// **Описание**: Создайте тип, который извлекает
// только числовые типы из объединения, и объявите переменную этого типа
type ResponseCode =
  | "success"
  | "error"
  | "warning"
  | 200
  | 404
  | 500
  | true
  | false;

type TResponseCode = Extract<ResponseCode, number>;

const ResponseCodeParam: TResponseCode = 200;

// **Описание**: Создайте тип, который получает
// типы параметров функции, и объявите переменную этого типа

function createUser(name: string, age: number, isActive: boolean) {
  return { name, age, isActive };
}

type ParamsType = Parameters<typeof createUser>;
const Parameters: ParamsType = ["dd", 4, true];

// **Описание**: Создайте тип, который делает все поля
// интерфейса доступными только для чтения, и объявите переменную этого типа

interface Settings {
  theme: string;
  language: string;
  notifications: boolean;
}

type TSettings = Readonly<Settings>;

const SettingsObj: TSettings = {
  theme: "d",
  language: "",
  notifications: true,
};

// **Описание**: Создайте тип,
//  который получает типы параметров конструктора класса, и объявите переменную этого типа

class Vehicle {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

type TVehicle = ConstructorParameters<typeof Vehicle>;
const vehicle: TVehicle = ["", "", 10];

// **Описание**: Создайте тип, который получает тип возвращаемого
//  значения функции, и объявите переменную этого типа

function calculateTotal(price: number, tax: number) {
  return {
    subtotal: price,
    taxAmount: price * tax,
    total: price + price * tax,
  };
}

type TCalculateTotal = ReturnType<typeof calculateTotal>;

const returnObj: TCalculateTotal = {subtotal: 3, taxAmount: 4, total: 5}