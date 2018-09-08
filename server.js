const xmlrpc = require('xmlrpc');
const infixToPostfix = require('./lib/infixToPostfix');
const calculator = require('./lib/postfixCalculator');

const server = xmlrpc.createServer({ host: '0.0.0.0', port: 9090 });
server.on('NotFound', (method, params) => {
  console.log('Method Don\'t Exist');
});
server.on('infixToPostfix', (err, params, cb) => {
  const postfix = infixToPostfix(params[0]);
  console.log(calculator(postfix))
  cb(null, calculator(postfix));
});
console.log('XML-RPC server listening on port 9091');