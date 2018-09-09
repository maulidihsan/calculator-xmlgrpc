const xmlrpc = require('xmlrpc');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = xmlrpc.createClient({ host: '0.0.0.0', port: 9090 });
rl.on('line', (text) => {
  client.methodCall('calculate', [text], (err, value) => {
    if(err) {
      console.log(err);
    } else {
      console.log(value);
    }
  });
});
