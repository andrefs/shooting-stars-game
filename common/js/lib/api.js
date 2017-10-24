import isomorphicFetch from 'isomorphic-fetch';

const apiUrl = 'http://localhost:15111';

// Overrides the fetch() method to add the base API url to the front.
export const fetch = (url, params, ...rest) => {
  console.log('XXXXXXXXXXXXXXXx 88', apiUrl + url, {mode: 'cors', ...params}, ...rest);
  return isomorphicFetch( apiUrl + url, {mode: 'cors', ...params}, ...rest);
};

export const getGameInstance = (...params) => {
  const url = '/gameInstances/current?userId=59ecfd6c28318d1a0d04a189';
  return fetch(url, ...params);
};

export const postPlayerPick = (pick) => {
  const url = `/gameInstances/currentTurn/${pick}?userId=59ecfd6c28318d1a0d04a189`;
  return fetch(url, {method: 'POST'});
};
