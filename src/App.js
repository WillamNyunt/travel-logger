import './scss/App.scss';
import Map from './components/Map';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';

function App() {
  const theme = useSelector(state => state.theme.theme)
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" Component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


          {/* <div className={`app ${theme}`}>
            <Map />
          </div> */}