import './scss/App.scss';
import Map from './components/Map';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import Dashboard from './Dashboard';

function App() {
  const theme = useSelector(state => state.theme.theme)
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route exact path="/register" Component={Register} />
          <Route exact path="/reset" Component={Reset} />
          <Route exact path="/dashboard" Component={Dashboard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


          {/* <div className={`app ${theme}`}>
            <Map />
          </div> */}