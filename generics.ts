// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию
const data = [
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 3, name: "Надя" },
];

interface IObject {
  id: number;
}

type Direction = "ask" | "desk";

function sortObjects<T extends IObject>(
  arr: T[],
  direction: Direction = "ask",
) {
  if (direction === "ask") {
    return arr.sort((el1, el2) => el1.id - el2.id);
  } else if (direction === "desk") {
    return arr.sort((el1, el2) => el2.id - el1.id);
  } else null;
}
console.log(sortObjects(data));

// Создайте generic-функцию для объединения двух значений в пару
function makePair<A, B>(firstParam: A, secondParam: B) {
  return { first: firstParam, second: secondParam };
}

// Создайте generic-функцию для получения первого элемента массива
function first<T>(arr: T[] | undefined) {
  return arr?.[0];
}

// Создайте generic-интерфейс для хранения результата операции
interface OperationResult<T> {
  success: boolean;
  result: T;
}

// Создайте generic-функцию для разделения массива на две части по заданному индексу

function splitAt<T>(arr: T[], num: number): [T[], T[]] {
  const newArr = [];
  const left = arr.slice(0, num);
  const right = arr.slice(num);
  if (num <= 0) {
    newArr.push([]);
    newArr.push(right);
  } else {
    newArr.push(left);
    newArr.push(right);
  }
  return newArr as [T[], T[]];
}
console.log(splitAt([1, 2, 3, 4, 5], 2));

// Создайте generic-класс для хранения пары ключ-значение
class KeyVal<K, V> {
  readonly key;
  readonly value;
  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  getKey() {
    return this.key;
  }
}

// Создайте generic-функцию для фильтрации массива по заданному условию
function filterArray<T>(arr: T[], funcPredic: (element: T) => boolean) {
  return arr.filter((elem) => funcPredic(elem));
}

// Создайте generic-функцию для объединения элементов двух массивов в один

function concat<T>(arr1: T[], arr2: T[]) {
  return [...arr1, ...arr2];
}

// Создайте generic-функцию для поиска элемента в массиве по заданному условию
function findElement<T>(arr: T[], funcPredic: (element: T) => boolean) {
  return arr.find((elem) => funcPredic(elem));
}

// Создайте generic-функцию для обмена местами двух элементов в массиве
function swapElements<T>(arr: T[], index1: number, index2: number): T[] {
  if (
    index1 < 0 ||
    index2 < 0 ||
    index1 >= arr.length ||
    index2 >= arr.length
  ) {
    return structuredClone(arr);
  }
  const result = structuredClone(arr);

  [result[index1], result[index2]] = [result[index2], result[index1]];

  return result;
}

// Создайте generic-функцию для получения последнего элемента массива
function last<T>(arr: T[]) {
  return arr[arr.length - 1];
}
