import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import TopRated from './routes/TopRated';
import Upcoming from './routes/Upcoming';
import Popular from './routes/Popular';
import Discover from './routes/Discover';
import Dashboard from './routes/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/upcoming' element={<Upcoming />}/>
          <Route path='/popular' element={<Popular />}/>
          <Route path='/discover' element={<Discover />}/>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/top-rated' element={<TopRated />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;