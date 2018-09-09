const xmlrpc = require('xmlrpc');
const infixToPostfix = require('./lib/infixToPostfix');
const calculator = require('./lib/postfixCalculator');

const server = xmlrpc.createServer({ host: '0.0.0.0', port: 9090 });
server.on('NotFound', (method, params) => {
  console.log('Method Don\'t Exist');
});
server.on('calculate', (err, params, cb) => {
  let result;
  try {
    const postfix = infixToPostfix(params[0]);
    result = calculator(postfix);
    console.log(`${params[0]} = ${result}`);
  } catch (e) {
    result = 'Compute Error';
  }
  cb(null, result);
});
console.log('XML-RPC server listening on port 9090');