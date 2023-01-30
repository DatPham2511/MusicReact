import { Provider } from 'react-redux';
import './App.css';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import Playing from './components/Playing';
import { Store } from './redux/Store';
function App() {
  return (
    <div className="App" >
      <Provider store={Store}>
      <Navbar/>
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
          <DetailSong/>
          <ListSong/>
        </div>
        <Playing/>
      </Provider>
    </div>
  );
}

export default App;
