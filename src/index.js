import { createStore } from 'redux';
import reducers from './reducers';
import { place, report, rotate } from './actions/index';

const store = createStore(reducers);

process.stdin.resume();
process.stdin.setEncoding('utf8');

const stdin = process.openStdin();

process.stdout.write('Write a command for the Robot.');

stdin.addListener('data', (input) => {
  let action = executeCommand(input);
  
  action.forEach(store.dispatch);
});

export function executeCommand(input) {
  const object = input
    .toUpperCase()
    .trim()
    .replace(/,/g, ' ')
    .replace(/\s\s+/g, ' ')
    .split(' ');

  const [command, x, y, f] = object;
  
  switch (command) {
    case 'PLACE':
      return [place({ x, y, f })];
    case 'REPORT':
      return [report()];
    case 'LEFT':
    case 'RIGHT': 
      return [rotate(command)];
    default:
      console.log('Invalid option. Please type PLACE, MOVE, LEFT, RIGHT or REPORT');
      return [];
  }
}
