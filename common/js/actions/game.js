import {
  FETCH_GAME_REQUEST, FETCH_GAME_SUCCESS, FETCH_GAME_FAILURE,
  POST_PICK_REQUEST, POST_PICK_SUCCESS, POST_PICK_FAILURE
} from '../constants';
// import {fetch} from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';

export const fetchGameRequest = generateActionCreator(FETCH_GAME_REQUEST);
export const fetchGameSuccess = generateActionCreator(FETCH_GAME_SUCCESS, 'game');
export const fetchGameFailure = generateActionCreator(FETCH_GAME_FAILURE, 'error');

export const postPickRequest = generateActionCreator(POST_PICK_REQUEST);
export const postPickSuccess = generateActionCreator(POST_PICK_SUCCESS, 'game');
export const postPickFailure = generateActionCreator(POST_PICK_FAILURE, 'error');

export const fetchGame = () => {
  return async (dispatch) => {
    dispatch(fetchGameRequest());
    try {
      // const response = await fetch('/api/todos', { method: 'GET' });
      // const game = await response.json();

      const game = {'_id':'59ef89349227064ec5716ebb','__v':1,'modified':'2017-10-24T18:41:10.852Z','created':'2017-10-24T18:40:52.073Z','isFinished':false,'currentScore':{'sync':50,'async':50,'bot':0},'turns':{'current':{'_id':'59ef89469227064ec5716ec5','triple':{'_id':'59ecfd5d28318d1a0d04a0bd','randomSeq':'8c8e9ff51496d5fc7c2d7e07dbc8db53','highestItemId':10,'itemA':{'_id':'59ecfd5c28318d1a0d04a080','id':3,'imageUrl':'photos/prince.jpg','name':'Prince','__v':0,'modified':'2017-10-22T20:19:40.926Z','created':'2017-10-22T20:19:40.926Z'},'itemB':{'_id':'59ecfd5c28318d1a0d04a084','id':8,'imageUrl':'photos/brunomars.jpg','name':'Bruno Mars','__v':0,'modified':'2017-10-22T20:19:40.927Z','created':'2017-10-22T20:19:40.927Z'},'itemC':{'_id':'59ecfd5c28318d1a0d04a07c','id':10,'imageUrl':'photos/gaga.jpg','name':'Lady Gaga','__v':0,'modified':'2017-10-22T20:19:40.925Z','created':'2017-10-22T20:19:40.925Z'},'__v':0,'modified':'2017-10-22T20:19:41.977Z','created':'2017-10-22T20:19:41.978Z'}},'previous':[{'_id':'59ef89349227064ec5716ebe','triple':{'_id':'59ecfd5d28318d1a0d04a165','randomSeq':'88b30f69aa41afa808becaa0614d86e8','highestItemId':10,'itemA':{'_id':'59ecfd5c28318d1a0d04a07b','id':1,'imageUrl':'photos/madonna.jpg','name':'Madonna','__v':0,'modified':'2017-10-22T20:19:40.921Z','created':'2017-10-22T20:19:40.921Z'},'itemB':{'_id':'59ecfd5c28318d1a0d04a082','id':7,'imageUrl':'photos/amy.jpeg','name':'Amy Whinehouse','__v':0,'modified':'2017-10-22T20:19:40.926Z','created':'2017-10-22T20:19:40.926Z'},'itemC':{'_id':'59ecfd5c28318d1a0d04a07c','id':10,'imageUrl':'photos/gaga.jpg','name':'Lady Gaga','__v':0,'modified':'2017-10-22T20:19:40.925Z','created':'2017-10-22T20:19:40.925Z'},'__v':0,'modified':'2017-10-22T20:19:42.251Z','created':'2017-10-22T20:19:42.251Z'},'__v':0,'modified':'2017-10-24T18:41:10.812Z','created':'2017-10-24T18:40:52.152Z','score':{'modified':null,'created':null,'_id':'59ef89349227064ec5716ebd','bot':0,'async':50,'sync':50},'moves':{'sync':'AB','async':'AB','bot':'AC','modified':null,'created':null,'_id':'59ef89349227064ec5716ebc'}}]},'players':{'sync':{'_id':'59ecfd6c28318d1a0d04a18a','username':'user3@example.com'},'async':null}};
      dispatch(fetchGameSuccess(game));
    } catch (e) {
      dispatch(fetchGameFailure(e.message));
    }
  };
};

export const postPick = pick => {
  return async (dispatch) => {

    dispatch(postPickRequest(pick));
    try {
    //   const response = await fetch('/gameInstances/current', {method:'POST'});
    //   const game = await response.json();

      const game = {'_id':'59ef89349227064ec5716ebb','__v':2,'modified':'2017-10-24T18:43:42.580Z','created':'2017-10-24T18:40:52.073Z','isFinished':false,'currentScore':{'bot':0,'async':100,'sync':100},'turns':{'current':{'_id':'59ef89de9227064ec5716ed4','triple':{'_id':'59ecfd5d28318d1a0d04a112','randomSeq':'8d1abf4f826cf0858b70cfe805676118','highestItemId':7,'itemA':{'_id':'59ecfd5c28318d1a0d04a07d','id':2,'imageUrl':'photos/queen.jpg','name':'Freddie Mercury (Queen)','__v':0,'modified':'2017-10-22T20:19:40.925Z','created':'2017-10-22T20:19:40.925Z'},'itemB':{'_id':'59ecfd5c28318d1a0d04a07e','id':4,'imageUrl':'photos/bono.png','name':'Bono (U2)','__v':0,'modified':'2017-10-22T20:19:40.926Z','created':'2017-10-22T20:19:40.926Z'},'itemC':{'_id':'59ecfd5c28318d1a0d04a082','id':7,'imageUrl':'photos/amy.jpeg','name':'Amy Whinehouse','__v':0,'modified':'2017-10-22T20:19:40.926Z','created':'2017-10-22T20:19:40.926Z'},'__v':0,'modified':'2017-10-22T20:19:42.330Z','created':'2017-10-22T20:19:42.330Z'}},'previous':[{'_id':'59ef89349227064ec5716ebe','triple':{'_id':'59ecfd5d28318d1a0d04a165','randomSeq':'88b30f69aa41afa808becaa0614d86e8','highestItemId':10,'itemA':{'_id':'59ecfd5c28318d1a0d04a07b','id':1,'imageUrl':'photos/madonna.jpg','name':'Madonna','__v':0,'modified':'2017-10-22T20:19:40.921Z','created':'2017-10-22T20:19:40.921Z'},'itemB':{'_id':'59ecfd5c28318d1a0d04a082','id':7,'imageUrl':'photos/amy.jpeg','name':'Amy Whinehouse','__v':0,'modified':'2017-10-22T20:19:40.926Z','created':'2017-10-22T20:19:40.926Z'},'itemC':{'_id':'59ecfd5c28318d1a0d04a07c','id':10,'imageUrl':'photos/gaga.jpg','name':'Lady Gaga','__v':0,'modified':'2017-10-22T20:19:40.925Z','created':'2017-10-22T20:19:40.925Z'},'__v':0,'modified':'2017-10-22T20:19:42.251Z','created':'2017-10-22T20:19:42.251Z'},'__v':0,'modified':'2017-10-24T18:41:10.812Z','created':'2017-10-24T18:40:52.152Z','score':{'modified':null,'created':null,'_id':'59ef89349227064ec5716ebd','bot':0,'async':50,'sync':50},'moves':{'sync':'AB','async':'AB','bot':'AC','modified':null,'created':null,'_id':'59ef89349227064ec5716ebc'}},{'_id':'59ef89469227064ec5716ec5','triple':{'_id':'59ecfd5d28318d1a0d04a0bd','randomSeq':'8c8e9ff51496d5fc7c2d7e07dbc8db53','highestItemId':10,'itemA':{'_id':'59ecfd5c28318d1a0d04a080','id':3,'imageUrl':'photos/prince.jpg','name':'Prince','__v':0,'modified':'2017-10-22T20:19:40.926Z','created':'2017-10-22T20:19:40.926Z'},'itemB':{'_id':'59ecfd5c28318d1a0d04a084','id':8,'imageUrl':'photos/brunomars.jpg','name':'Bruno Mars','__v':0,'modified':'2017-10-22T20:19:40.927Z','created':'2017-10-22T20:19:40.927Z'},'itemC':{'_id':'59ecfd5c28318d1a0d04a07c','id':10,'imageUrl':'photos/gaga.jpg','name':'Lady Gaga','__v':0,'modified':'2017-10-22T20:19:40.925Z','created':'2017-10-22T20:19:40.925Z'},'__v':0,'modified':'2017-10-22T20:19:41.977Z','created':'2017-10-22T20:19:41.978Z'},'__v':0,'modified':'2017-10-24T18:43:42.540Z','created':'2017-10-24T18:41:10.835Z','score':{'modified':null,'created':null,'_id':'59ef89469227064ec5716ec4','bot':0,'async':50,'sync':50},'moves':{'sync':'AB','async':'AB','bot':'AC','modified':null,'created':null,'_id':'59ef89469227064ec5716ec3'}}]},'players':{'sync':{'_id':'59ecfd6c28318d1a0d04a18a','username':'user3@example.com'},'async':null}};

      dispatch(postPickSuccess(game));
    } catch (e) {
      dispatch(postPickFailure(e.message));
    }
  };
};
