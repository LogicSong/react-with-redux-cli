import { connect } from 'react-redux';
import actions from './service/actions';

const { add } = actions;
const Home = props => {
  console.log(props);
  let { number, add } = props;
  number++;
  return <div onClick={add}>{number}</div>;
};
export default connect(
  state => {
    return state.exampleReducer;
  },
  dispatch => {
    return {
      add: () => dispatch(add)
    };
  }
)(Home);
// export default Home;
