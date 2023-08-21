import './scss/App.scss';
import Map from './components/Map';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector(state => state.theme.theme)
  return (
    <div className={`app ${theme}`}>
          <Map />
    </div>
  );
}

export default App;
