import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CityPage from './components/CityPage';

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/city/:cityName" component={CityPage} />
      </Router>
    </>
  );
};

export default App;
