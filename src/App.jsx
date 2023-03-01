import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import TMDBCategory from './routes/TMDBCategory';

export const routing_config = [
  {
    id: 1,
    path: "/top_rated",
    element: TMDBCategory,
    nav_title: "Top Rated",
  },
  {
    id: 2,
    path: "/popular",
    element: TMDBCategory,
    nav_title: "Popular",
  },
  {
    id: 3,
    path: "/upcoming",
    element: TMDBCategory,
    nav_title: "Upcoming",
  },
]

function App() {
  const [routes] = useState(routing_config)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {routes.map((route, index) => (
          <Route key={index} path={`/:category`} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App;