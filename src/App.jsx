import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import TMDBCategory from './routes/TMDBCategory';

function App() {
  const [categories, setCategories] = useState(["top_rated", "popular"])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {categories.map((category, index) => (
          <Route key={index} path={`/:category`} element={<TMDBCategory />}/>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App;