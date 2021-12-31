import { useSelector, useDispatch } from 'react-redux';
import actions from './service/actions';

const { add } = actions;
const Home = props => {
  const example = useSelector(state => state.exampleReducer);
  const dispatch = useDispatch();
  return <div onClick={() => dispatch(add)}>{example.number}</div>;
};

export default Home;
