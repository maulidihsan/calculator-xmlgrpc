const LinkedStack = require('./LinkedStack');

const parseInput = (input) => {
  let expression = input;
  let copy = input;
  expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, ""); // replace digit with arbitrary symbols (#)
  const numbers = copy.split(/[^0-9\.]+/);
  const operators = expression.split("#").filter(n => n); // getting operator from expression
  let expressionArray = [];
  for(let i = 0; i < numbers.length; i++){
    expressionArray.push(numbers[i]);
    if (i < operators.length) expressionArray.push(operators[i]);
  }
  return expressionArray;
};

const infixToPostfix = (input) => {
  let postfix = '';
  let infixStack = new LinkedStack();
  const expressionArray = parseInput(input);
  expressionArray.map((char) => {
    if(!isNaN(parseFloat(char))) {
      postfix += `${char} `;
    } else if(char === '+' || char === '-' || char === '*' || char === '/' || char === '^') {
      while(char !== '^' && !infixStack.isStackEmpty() && (prioritas(char) <= prioritas(infixStack.topStack()))) {
        postfix += `${infixStack.popFromStack().item} `;
      }
      infixStack.pushToStack(char);
      // console.log('Stack: ', infixStack.printStack());
    }
  });
  while(!infixStack.isStackEmpty()) {
    postfix += `${infixStack.popFromStack().item} `
  }
  return postfix.trim();
};

const prioritas = (operator) => {
  switch(operator) {
    case '^':
      return 3;
    case '*':
    case '/':
      return 2;
    case '+':
    case '-':
      return 1;
    default:
      return 0;
  }
};

module.exports = infixToPostfix;
