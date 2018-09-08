const LinkedStack = require('./LinkedStack');

const infixToPostfix = (expression) => {
  let postfix = '';
  let infixStack = new LinkedStack();

  const expressionArray = expression.split(' ');
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
