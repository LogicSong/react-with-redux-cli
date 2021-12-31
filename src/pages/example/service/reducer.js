import * as types from './action-types';

const example = (state = { number: 1 }, action) => {
  switch (action.type) {
    case types.ADD:
      return {
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
};

export default example;
