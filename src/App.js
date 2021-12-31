import Example from './pages/example';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={'/'} element={<Navigate to={'/index'} />} />
        <Route path={'/index'} element={<Example />} />
      </Routes>
    </Router>
  );
}

export default App;
