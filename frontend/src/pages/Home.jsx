
import Navbar from '../components/Navbar';
import { FaSearch } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { MyContext } from '../context/Context';
import "../index.css";

const Home = () => {
  const [searchterm, setSearchterm] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentslide, setcurrentslide] = useState(0);
  const { movies, tvseries, loading } = useContext(MyContext);


  // Carousel logic for movies
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
    }
  };


  // Carousel logic for tv series
  const nextslide = () => {
    setcurrentslide((prev) => (prev + 1) % tvseries.length);
  };
  const prevslide = () => {
    if (currentslide > 0) {
      setcurrentslide((prev) => (prev - 1 + tvseries.length) % tvseries.length);
    }
  };




  return (
    <div className=' sm:flex sm:flex-row min-h-screen max-h-auto '>

      <div><Navbar /></div>

      {loading && <div className="spinner"></div>}

      <div className="px-4 py-4 sm:px-8 ">
        <div className='py-4 sm:py-12 sm:px-16 text-lg sm:text-3xl flex flex-row gap-6 '>
          <label htmlFor=""><FaSearch /> </label>
          <input placeholder='Search movies or tvshows' className='bg-black' value={searchterm} onChange={(e) => setSearchterm(e.target.value)} />
        </div>

        {/* Search Results */}
        {searchterm.trim() ? (
          <div>
            <h2 className='text-3xl sm:px-20'>Search Results</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-20">
              {[...movies, ...tvseries]
                .filter(item =>
                  item?.primaryTitle?.toLowerCase().includes(searchterm.toLowerCase())
                )
                .map((item) => (
                  <Link
                    to={`/${item.titleType === 'movie' ? 'movies' : 'tvseries'}/${item.id}/${item.primaryTitle}`}
                    key={item.id}
                  >
                    <div>
                      <img
                        src={item.primaryImage}
                        alt={item.primaryTitle}
                        className="w-full h-[250px] object-cover rounded-lg"
                      />
                      <p className="text-lg mt-2">{item.primaryTitle}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ) : (
          <>
            {/* Trending movies carousel */}

            <div>
              <h1 className=' sm:px-20 text-4xl'>Trending movies</h1>
              <div >

                {/* Carousel */}
                {movies.length > 0 && (
                  <div className="relative w-full flex justify-center items-center sm:p-6 mt-4 ">
                    <button onClick={prevSlide} className="absolute left-0 md:left-4 p-4"><TfiArrowCircleLeft /></button>

                    <div className=" px-12 items-center flex flex-row">

                      <div className=' flex gap-4 justify-center'>
                        <Link to={`/movies/${movies[currentSlide].id}/${movies[currentSlide].primaryTitle}`}>
                          <div>
                            <img
                              src={movies[currentSlide].primaryImage}
                              alt={movies[currentSlide].primaryTitle}
                              className="w-[300px] h-[200px] rounded-lg"
                            />
                            <p className="text-lg">{movies[currentSlide].primaryTitle}</p>
                          </div>
                        </Link>
                        <Link to={`/movies/${movies[currentSlide + 1].id}/${movies[currentSlide + 1].primaryTitle}`}>
                          <div className='hidden sm:block'>
                            <img
                              src={movies[currentSlide + 1].primaryImage}
                              alt={movies[currentSlide + 1].primaryTitle}
                              className="w-[300px] h-[200px] rounded-lg"
                            />
                            <p className="text-lg">{movies[currentSlide + 1].primaryTitle}</p>
                          </div></Link>
                        <Link to={`/movies/${movies[currentSlide + 2].id}/${movies[currentSlide + 2].primaryTitle}`}>
                          <div className='hidden md:block'>
                            <img
                              src={movies[currentSlide + 2].primaryImage}
                              alt={movies[currentSlide + 2].primaryTitle}
                              className="w-[300px] h-[200px] rounded-lg"
                            />
                            <p className="text-lg">{movies[currentSlide + 2].primaryTitle}</p>
                          </div></Link>
                        <Link to={`/movies/${movies[currentSlide + 3].id}/${movies[currentSlide + 3].primaryTitle}`}>
                          <div className='hidden lg:block'>
                            <img
                              src={movies[currentSlide + 3].primaryImage}
                              alt={movies[currentSlide + 3].primaryTitle}
                              className="w-[300px] h-[200px] rounded-lg"
                            />
                            <p className="text-lg">{movies[currentSlide + 3].primaryTitle}</p>
                          </div></Link>
                        <Link to={`/movies/${movies[currentSlide + 4].id}/${movies[currentSlide + 4].primaryTitle}`}>
                          <div className='hidden xl:block'>
                            <img
                              src={movies[currentSlide + 4].primaryImage}
                              alt={movies[currentSlide + 4].primaryTitle}
                              className="w-[300px] h-[200px] rounded-lg"
                            />
                            <p className="text-lg">{movies[currentSlide + 4].primaryTitle}</p>
                          </div></Link>
                        <Link to={`/movies/${movies[currentSlide + 5].id}/${movies[currentSlide + 5].primaryTitle}`}>
                          <div className='hidden 2xl:block'>
                            <img
                              src={movies[currentSlide + 5].primaryImage}
                              alt={movies[currentSlide + 5].primaryTitle}
                              className="w-[300px] h-[200px] rounded-lg"
                            />
                            <p className="text-lg">{movies[currentSlide + 5].primaryTitle}</p>
                          </div></Link>


                      </div>
                    </div>

                    <button onClick={nextSlide} className="absolute right-0 md:right-4 p-4"><TfiArrowCircleLeft className="rotate-180" /></button>
                  </div>
                )}
              </div>
            </div>
            {/* Recommended tvshows carousel */}
            <div>
              <h1 className=' sm:px-20 text-4xl'>Recommended TvShows</h1>
              <div>
                {/* Carousel */}
                {tvseries.length > 0 && (
                  <div className="relative w-full flex justify-center items-center sm:p-6 mt-4 ">
                    <button onClick={prevslide} className="absolute left-0 md:left-4 p-4"><TfiArrowCircleLeft /></button>
                    <div className=" px-12 items-center flex flex-row">
                      <div className=' flex gap-7 justify-center'>
                        <Link to={`/tvseries/${tvseries[currentslide].id}/${tvseries[currentslide].primaryTitle}`}>
                          <div><img
                            src={tvseries[currentslide].primaryImage}
                            alt={tvseries[currentslide].primaryTitle}
                            className="w-[200px] h-[200px] rounded-lg"
                          />
                            <p className="text-lg">{tvseries[currentslide].primaryTitle}</p>
                          </div></Link>
                        <Link to={`/tvseries/${tvseries[currentslide + 1].id}/${tvseries[currentslide + 1].primaryTitle}`}>
                          <div>
                            <img
                              src={tvseries[currentslide + 1].primaryImage}
                              alt={tvseries[currentslide + 1].primaryTitle}
                              className="w-[200px] h-[200px] rounded-lg"
                            />
                            <p className="text-lg">{tvseries[currentslide + 1].primaryTitle}</p>
                          </div></Link>
                        <Link to={`/tvseries/${tvseries[currentslide + 2].id}/${tvseries[currentslide + 2].primaryTitle}`}>
                          <div className='hidden sm:block'>
                            <img
                              src={tvseries[currentslide + 2].primaryImage}
                              alt={tvseries[currentslide + 2].primaryTitle}
                              className="w-[200px] h-[200px] rounded-lg"
                            />
                            <p className="text-lg">{tvseries[currentslide + 2].primaryTitle}</p>
                          </div></Link>
                        <Link to={`/tvseries/${tvseries[currentslide + 3].id}/${tvseries[currentslide + 3].primaryTitle}`}>
                          <div className='hidden sm:block'>
                            <img
                              src={tvseries[currentslide + 3].primaryImage}
                              alt={tvseries[currentslide + 3].primaryTitle}
                              className="w-[200px] h-[200px] rounded-lg"
                            />
                            <p className="text-lg">{tvseries[currentslide + 3].primaryTitle}</p>
                          </div></Link>
                        <Link to={`/tvseries/${tvseries[currentslide + 4].id}/${tvseries[currentslide + 4].primaryTitle}`}>
                          <div className='hidden md:block'>
                            <img
                              src={tvseries[currentslide + 4].primaryImage}
                              alt={tvseries[currentslide + 4].primaryTitle}
                              className="w-[200px] h-[200px] rounded-lg"
                            />
                            <p className="text-lg">{tvseries[currentslide + 4].primaryTitle}</p>
                          </div></Link>
                        <Link to={`/tvseries/${tvseries[currentslide + 5].id}/${tvseries[currentslide + 5].primaryTitle}`}>
                          <div className='hidden lg:block'>
                            <img
                              src={tvseries[currentslide + 5].primaryImage}
                              alt={tvseries[currentslide + 5].primaryTitle}
                              className="w-[200px] h-[200px] rounded-lg"
                            />
                            <p className="text-lg">{tvseries[currentslide + 5].primaryTitle}</p>
                          </div></Link>

                      </div>
                    </div>

                    <button onClick={nextslide} className="absolute right-0 md:right-4 p-4"><TfiArrowCircleLeft className="rotate-180" /></button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Home;