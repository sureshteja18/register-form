import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './Register';
import Edit from './Edit';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/edit' element={<Edit/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
