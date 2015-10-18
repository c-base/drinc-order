require('babel/register');

const config   = require('./config');
console.log('CONFIG ENV: ' + config.get('env'))
module.exports = require('./build/webpack/' + config.get('env'));
