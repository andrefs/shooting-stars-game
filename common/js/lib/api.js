import {CALL_API} from 'redux-api-middleware';
const apiUrl = 'http://localhost:15111';

export function fetch(path, params){
  return {
    [CALL_API]: {
      endpoint: apiUrl+path,
      method: params.method || 'GET',
      headers: {'Content-Type':'application/json'},
      types: ['REQUEST', 'SUCCESS', 'FAILURE'],
      options: params.options
    }
  };
}

export const getGameInstance = () => {
  const url = '/gameInstances/current';
  return fetch(url);
};

export const postPlayerPick = (pick) => {
  const url = `/gameInstances/currentTurn/${pick}`;
  return fetch(url, {method: 'POST'});
};

export const createNewGame = () => {
  const url = '/gameInstances/current';
  return fetch(url, {method: 'POST'});
};

export const getBestScores = () => {
  const url = '/players/bestScores';
  return fetch(url);
};

