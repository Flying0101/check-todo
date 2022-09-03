import react from 'react';
import { RecoilRoot } from 'recoil';

import Display from './components/Display.js';
import List from './components/List.js';
import AddFunc from './components/AddFunc.js';

import './css/App.css';

function App() {





  return (
    <div className="App">

      <RecoilRoot>
        <Display />
        <List />
        <AddFunc />
      </RecoilRoot>
    </div>
  );
}

export default App;
