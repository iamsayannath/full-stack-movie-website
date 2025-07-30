import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaSearch, FaRegBookmark, FaBookmark } from 'react-icons/fa'; // 📌 Bookmark icons
import { MyContext } from '../context/Context';

const TvSeries = () => {
  const [searchTvserie, setSearchTvserie] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const tvseriesPerPage = 12;
  const { tvseries } = useContext(MyContext);



  const filteredTvseries = tvseries.filter((tvserie) =>
    tvserie.primaryTitle.toLowerCase().includes(searchTvserie.toLowerCase())
  );

  const indexOfLastTVseries = currentPage * tvseriesPerPage;
  const indexOfFirstTVseries = indexOfLastTVseries - tvseriesPerPage;
  const currentTVseries = filteredTvseries.slice(indexOfFirstTVseries, indexOfLastTVseries);
  const totalPages = Math.ceil(tvseries.length / tvseriesPerPage);

  return (
    <div>
      <div className='sm:flex sm:flex-row '>
        <div><Navbar /></div>

        <div className="px-4 py-4 sm:px-8 ">
          <div className='py-4 sm:py-12 sm:px-16 text-lg sm:text-3xl flex flex-row gap-6 '>
            <label htmlFor=""><FaSearch /> </label>
            <input
              placeholder='Search for Tvseries'
              className='bg-black'
              value={searchTvserie}
              onChange={(e) => setSearchTvserie(e.target.value)}
            />
          </div>

          <h1 className='sm:px-20 text-4xl'>TVseries page</h1>

          <div>
            {currentTVseries.length > 0 ? (
              <div className="px-4 py-4 sm:px-8 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-8">
                {currentTVseries
                  .map((tvserie) => (
                    <div key={tvserie.id} className="relative hover:bg-slate-600 px-10 py-4 h-fit flex justify-center text-center">



                      <Link to={`/tvseries/${tvserie.id}/${tvserie.primaryTitle}`}>
                        <img src={tvserie.primaryImage} alt="" height="320px" width="320px" />
                        <div className='flex flex-row gap-2'>
                          {tvserie.releaseDate} {tvserie.contentRating} {tvserie.type}
                        </div>
                        <p className="text-3xl text-left">{tvserie.primaryTitle}</p>
                      </Link>
                    </div>
                  ))}
              </div>
            ) : (
              <p className='px-4 py-4 sm:px-20 text-2xl'>No Tvseries found</p>
            )}
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center text-xl lg:text-3xl space-x-2 mt-6 pb-12">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 border rounded ${currentPage === 1 ? "bg-black cursor-not-allowed" : "bg-black"}`}
          >
            <MdKeyboardArrowRight className="rotate-180" />
          </button>

          <button className="px-3 py-2 border rounded bg-black">{currentPage}</button>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 border rounded ${currentPage === totalPages ? "bg-black cursor-not-allowed" : "bg-black"}`}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default TvSeries;
