function processInput(input: unknown): void {
  switch (typeof input) {
    case "string":
      console.log(input.toUpperCase());
      break;
    case "number":
      console.log(input.toFixed(2));
      break;
    case "boolean":
      console.log(input);
    default:
      console.log("Неподдерживаемый тип");
      break;
  }
}

// type alias для результата операции
type TResult = {
  success: boolean;
  data: string;
  error?: string;
};

// функция для обработки результата с проверкой успешности
function isSuccess(obj: TResult) {
  if (obj.success) {
    return console.log(`Успех: ${obj.data}`);
  } else if (!obj.success) {
    if (obj.error) {
      return console.log(`Ошибка: ${obj.error}`);
    } else {
      return console.log(`Ошибка: неизвестная`);
    }
  }
}

// type alias для типа данных
type Score = string | number;

function isEquel(a: Score, b: Score): boolean {
  if (typeof a === typeof b && a === b) {
    return true;
  } else {
    return false;
  }
}

// type alias для типа данных
type TInput = string | number | boolean;

function whatIsType(input: TInput): string {
  switch (typeof input) {
    case "string":
      return "text";
    case "number":
      return "digit";
    case "boolean":
      return "flag";
    default:
      throw new Error("type is unknown");
  }
}

type UserData = {
  name: string;
  age: number;
};

function returnString(name: any, age: any): UserData | null {
  if (typeof name === "string" && name.length === 0) {
    return null;
  }
  if (typeof age == "number" && (120 < age || age < 1)) {
    return null;
  }

  return { name: name, age: age };
}
