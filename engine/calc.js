export default function calculate(input) {
  const operators = ["+", "-", "*", "/", "%"];
  let operator = null;
  let splitIndex = -1;

  for (let i = 1; i < input.length; i++) {
    if (operators.includes(input[i])) {
      operator = input[i];
      splitIndex = i;
      break;
    }
  }

  if (splitIndex === -1) return Number(input);

  const num1 = Number(input.slice(0, splitIndex));
  const num2 = Number(input.slice(splitIndex + 1));
  let ans;

  switch (operator) {
    case "+":
      ans = num1 + num2;
      break;
    case "-":
      ans = num1 - num2;
      break;
    case "/":
      ans = num1 / num2;
      break;
    case "*":
      ans = num1 * num2;
      break;
    case "%":
      ans = num1 * 0.01 * num2;
  }
  return ans;
}