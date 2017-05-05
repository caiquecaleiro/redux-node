import { createStore } from 'redux';
import reducers from './reducers';
import { place, report } from './actions/index';

const store = createStore(reducers);

process.stdin.resume();
process.stdin.setEncoding('utf8');

const stdin = process.openStdin();

process.stdout.write('Write a command for the Robot.');

stdin.addListener('data', (data) => {
  const inputObject = data
    .toUpperCase()
    .trim()
    .replace(/,/g, ' ')
    .replace(/\s\s+/g, ' ')
    .split(' ');
  
  let action = executeCommand(inputObject);
  
  action.forEach(store.dispatch);
});

function executeCommand(object) {
  const [command, x, y, f] = object;
  
  switch (command) {
    case 'PLACE':
      return [place({ x, y, f })];
    case 'REPORT':
      return [report()]
    default:
      console.log('Invalid option. Please type PLACE, MOVE, LEFT, RIGHT or REPORT');
      return [];
  }
}
