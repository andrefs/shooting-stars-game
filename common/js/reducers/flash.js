import {
  ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE
} from 'constants';

const defaultState = {
  items: {}
};

const flash = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return {
        items: {
          ...state.items,
          [action.item.id]: action.item
        }
      };


    case REMOVE_FLASH_MESSAGE:
      let newItems = state.items;
      delete newItems[action.id];
      return {
        items: newItems
      };


    default:
      return state;
  }
};

export default bestScores;
