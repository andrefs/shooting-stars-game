import {
  FETCH_GAME_REQUEST, FETCH_GAME_SUCCESS, FETCH_GAME_FAILURE
} from '../constants';
import {fetch} from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';


export const fetchGameRequest = generateActionCreator(FETCH_GAME_REQUEST);
export const fetchGameSuccess = generateActionCreator(FETCH_GAME_SUCCESS, 'game');
export const fetchGameFailure = generateActionCreator(FETCH_GAME_FAILURE, 'error');

export const fetchGame = () => {
  console.log('XXXXXXXXXXXXXXXXx 3');
  return async (dispatch) => {
    dispatch(fetchGameRequest());
    try {
      // const response = await fetch('/api/todos', { method: 'GET' });
      // const game = await response.json();

      const game = {'_id':'59ed078e2736f754f8aed035','modified':'2017-10-22T21:11:49.520Z','created':'2017-10-22T21:03:10.922Z','isFinished':false,'currentScore':{'sync':350,'async':350,'bot':50},'turns':{'previous':[{'_id':'59ed078e2736f754f8aed038','triple':{'_id':'59ecfd5d28318d1a0d04a0a2','randomSeq':'0108e468f78d2d0e022f5deb9abf75bc','highestItemId':8,'itemA':'59ecfd5c28318d1a0d04a080','itemB':'59ecfd5c28318d1a0d04a081','itemC':{'_id':'59ecfd5c28318d1a0d04a084','id':8,'imageUrl':'photos/brunomars.jpg','name':'Bruno Mars','modified':'2017-10-22T20:19:40.927Z','created':'2017-10-22T20:19:40.927Z','__v':0},'modified':'2017-10-22T20:19:41.776Z','created':'2017-10-22T20:19:41.776Z','__v':0},'modified':'2017-10-22T21:08:20.805Z','created':'2017-10-22T21:03:10.996Z','score':{'modified':null,'created':null,'_id':'59ed078e2736f754f8aed037','bot':0,'async':50,'sync':50},'moves':{'modified':null,'created':null,'_id':'59ed078e2736f754f8aed036','sync':'AB','async':'AB','bot':'BC'},'__v':0},{'_id':'59ed08c4a7e867528b93f9da','triple':{'_id':'59ecfd5d28318d1a0d04a0a2','randomSeq':'0108e468f78d2d0e022f5deb9abf75bc','highestItemId':8,'itemA':'59ecfd5c28318d1a0d04a080','itemB':'59ecfd5c28318d1a0d04a081','itemC':{'_id':'59ecfd5c28318d1a0d04a084','id':8,'imageUrl':'photos/brunomars.jpg','name':'Bruno Mars','modified':'2017-10-22T20:19:40.927Z','created':'2017-10-22T20:19:40.927Z','__v':0},'modified':'2017-10-22T20:19:41.776Z','created':'2017-10-22T20:19:41.776Z','__v':0},'modified':'2017-10-22T21:08:21.753Z','created':'2017-10-22T21:08:20.832Z','score':{'modified':null,'created':null,'_id':'59ed08c4a7e867528b93f9d9','bot':0,'async':50,'sync':50},'moves':{'modified':null,'created':null,'_id':'59ed08c4a7e867528b93f9d8','sync':'AB','async':'AB','bot':'BC'},'__v':0}],'current':{'_id':'59ed0995a7e867528b93fa58','triple':{'_id':'59ecfd5d28318d1a0d04a100','itemA':{'_id':'59ecfd5c28318d1a0d04a080','id':3,'imageUrl':'https://www.famousbirthdays.com/headshots/justin-bieber-2.jpg','name':'Justin Bieber','modified':'2017-10-22T20:19:40.926Z','created':'2017-10-22T20:19:40.926Z','__v':0},'itemB':{'_id':'59ecfd5c28318d1a0d04a081','id':5,'imageUrl':'http://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/13940583/800','name':'Carlos Paião','modified':'2017-10-22T20:19:40.926Z','created':'2017-10-22T20:19:40.926Z','__v':0},'itemC':{'_id':'59ecfd5c28318d1a0d04a083','id':9,'imageUrl':'https://images.vice.com/noisey/content-images/article/charles-bradley-interview-2014-strictly-reserved-for-you/Screen-Shot-2014-12-02-at-1-48-13-PM.jpg?crop=1xw:0.8987676056338029xh;center,center&resize=1050:*','name':'Charles Bradley','modified':'2017-10-22T20:19:40.927Z','created':'2017-10-22T20:19:40.927Z','__v':0}}}},'players':{'sync':{'_id':'59ecfd6d28318d1a0d04a18b','username':'user4@example.com'},'async':{'_id':'59ecfd6c28318d1a0d04a188','username':'user1@example.com'}},'__v':7};
      dispatch(fetchGameSuccess(game));
    } catch (e) {
      dispatch(fetchGameFailure(e.message));
    }
  };
};
