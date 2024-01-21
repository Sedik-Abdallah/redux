import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Allstg from './Allstg';
import Addstg from './Addstg';
import Modifiestg from './Modifiestg';
function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Allstg />} />
          <Route path='/add' element={<Addstg/>}/>
          <Route path='/updateStg/:id' element={<Modifiestg/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
