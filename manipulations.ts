// Необходимо написать функцию группировки,
// которая принимает массив объектов и его ключ,
// производит группировку по указанному ключу и возращает сгруппированный объект.

interface IData {
  group: number;
  name: string;
}

const dataArr: IData[] = [
  { group: 1, name: "a" },
  { group: 1, name: "b" },
  { group: 2, name: "c" },
];

interface IGroup<T> {
  [key: string]: any[];
}

type key = string | number | symbol;

function createGroupBy<T extends Record<string, any>>(
  arr: T[],
  key: keyof T,
): IGroup<T> {
  return arr.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];
    let curEl = map[itemKey];
    if (Array.isArray(curEl)) {
      curEl.push(item);
    } else {
      curEl = [item];
    }
    map[itemKey] = curEl;
    return map;
  }, {});
}
const res = createGroupBy(dataArr, "group");

// Реализуйте функцию getValue, которая принимает объект и ключ (ограниченный keyof)
// и возвращает значение по этому ключу с правильной типизацией.

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Создайте условный тип IsString, который проверяет,
// является ли переданный тип строкой, и возвращает
// true для string и false для всех остальных типов.
type IsString<T> = T extends string ? true : false;
type Test1 = IsString<string>; // должно быть true
type Test2 = IsString<number>; // должно быть false
type Test3 = IsString<boolean>; // должно быть false
type Test4 = IsString<"hello">;

// Создайте Mapped Type OptionalProps, который преобразует
// все свойства переданного типа в опциональные.

type OptionalProps<T> = {
  [K in keyof T]?: T[K];
};
// Тестовые типы для проверки
type User = { name: string; age: number };
// type Product = { id: number; active: boolean; role: string };

// Примеры использования
type OptionalUser = OptionalProps<User>;

// Создайте условный тип IsArray, который проверяет, является ли переданный
// тип массивом, и возвращает true для массивов и false для всех остальных типов.
type IsArray<T> = T extends readonly any[] ? true : false;

// Создайте условный тип ArrayElement, который извлекает
// тип элемента из массива с помощью infer.
type ArrayElement<T> = T extends (infer U)[] ? U : never;

// Cоздайте условный тип ExtractReturnType,
// который извлекает тип возвращаемого значения функции с помощью infer.
type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Создайте тип StringToNumber, который
// преобразует строковые литеральные типы в числовые, используя Template Literal Types.
type StringToNumber<T extends string> = T extends `${infer N extends number}`
  ? N
  : never;
// Создайте тип PickByType, который извлекает из объектного типа только те свойства,
//  значения которых соответствуют указанному типу.
type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

type IsFunction<T> = T extends (...args: any[]) => any ? true : false;

// Создайте Mapped Type ReadonlyProps, который преобразует все свойства переданного типа в readonly.
type ReadonlyProps<T> = {
  readonly [K in keyof T]: T[K];
};
