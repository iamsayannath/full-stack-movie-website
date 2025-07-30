
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
import DetailPage from './pages/DetailPage';

const App = () => {
  return (
    <div className='bg-black text-white max-w-[screen] h-auto sm:px-8  ' >
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvseries' element={<TvSeries />} />
          <Route path='/detailpage' element={<DetailPage />} />
          <Route path='/movies/:id/:primaryTitle' element={<DetailPage />} />
          <Route path='/tvseries/:id/:primaryTitle' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;