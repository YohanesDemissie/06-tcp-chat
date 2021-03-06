'use strict';

module.exports = (data, clientPool) => {
  let message = data.toString().slice(0, -1).split(' ');
  if (message[0][0] === '@') {
    switch (message[0]) {
      case '@quit':
        return { command: 'close' };
      case '@list':
        return { command: 'list' };
      case '@nickname':
        return { command: 'nickname', name: message[1] };
      case '@dm':
        if (clientPool.filter(c => c.nickname === message[1]).length) return { command: 'dm', name: message[1], said: message.slice(2).join(' ') };
    }
  } else return { command: 'message', said: message.join(' ') };
};