const LinkedStack = require('./LinkedStack');

const evaluate = (expression) => {
  let stack = new LinkedStack();
  const expressionArray = expression.split(' ');
  const operators = {
    '+': (a, b) =>  a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '^': (a, b) => Math.pow(a, b),
  };

  expressionArray.map((char) => {
    if(!isNaN(parseFloat(char))) {
      stack.pushToStack(parseFloat(char));
    } else if (char in operators) {
      const b = stack.popFromStack().item;
      const a = stack.popFromStack().item;
      const value = operators[char](a,b);
      stack.pushToStack(value);
      console.log(stack.printStack());
    }
  });
  if(stack.size > 1) {
    throw 'Compute Error';
  }
  return stack.topStack();
};

module.exports = evaluate;
