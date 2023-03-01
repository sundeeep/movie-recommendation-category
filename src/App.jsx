import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import TopRated from './routes/TopRated';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/top-rated' element={<TopRated />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;