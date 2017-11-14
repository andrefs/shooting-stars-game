import isomorphicFetch from 'isomorphic-fetch';
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

// Overrides the fetch() method to add the base API url to the front.
export function unauthFetch(url, params, ...rest){
  return isomorphicFetch( apiUrl + url, {mode: 'cors', ...params}, ...rest);
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

export const postLogin = (data) => {
  const url = '/auth/register';
  return unauthFetch(url, {
    method:'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)
  });
};
