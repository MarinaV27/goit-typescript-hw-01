function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

console.log(showMessage('Hello, World'));
console.log(calc(2, 5));
console.log(customError())