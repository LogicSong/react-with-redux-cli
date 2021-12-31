import * as types from './action-types';

export default {
  add: async dispatch => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    return dispatch({
      type: types.ADD
    });
  },
  decrement: () => {
    return {
      type: types.DECREMENT
    };
  }
};
