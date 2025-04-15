const [, , num1, operator, num2] = process.argv;

if (!num1 || !operator || !num2) {
  console.log('Usage: node calculator.js <num1> <operator> <num2>');
  process.exit(1);
}

const a = parseFloat(num1);
const b = parseFloat(num2);

if (isNaN(a) || isNaN(b)) {
  console.log('Both operands must be valid numbers.');
  process.exit(1);
}

let result;

switch (operator) {
  case '+':
    result = a + b;
    break;
  case '-':
    result = a - b;
    break;
  case '*':
    result = a * b;
    break;
  case '/':
    if (b === 0) {
      console.log('Error: Division by zero.');
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.log('Supported operators are: +, -, *, /');
    process.exit(1);
}

console.log(`Result: ${a} ${operator} ${b} = ${result}`);
