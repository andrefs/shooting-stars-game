'use strict';

import Home  from 'containers/Home';
import Todos from 'containers/Todos';
import Game  from 'containers/Game';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/todos',
    exact: true,
    component: Todos
  },
  {
    path: '/game',
    exact: true,
    component: Game
  }

];
