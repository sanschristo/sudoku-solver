import { Game } from './game';
import { easyGames } from './sample-games/easy';
import { mediumGames } from './sample-games/medium';
import { hardGames } from './sample-games/hard';

const divider = '\n\n**************************************\n\n';
const solutionText = '\nSolution:';

console.log(divider);

const easyGame = new Game(easyGames[0]);

console.log('Easy game:');
easyGame.logBoard(); // log starting configuration
easyGame.solve();
console.log(solutionText);
easyGame.logBoard(); //log solution
console.log(divider);

const medGame = new Game(mediumGames[0]);

console.log('Medium game:');
medGame.logBoard(); // log starting configuration
medGame.solve();
console.log(solutionText);
medGame.logBoard(); //log solution
console.log(divider);

const hardGame = new Game(hardGames[0]);

console.log('Hard game:');
hardGame.logBoard(); // log starting configuration
hardGame.solve();
console.log(solutionText);
hardGame.logBoard(); //log solution
console.log(divider);
