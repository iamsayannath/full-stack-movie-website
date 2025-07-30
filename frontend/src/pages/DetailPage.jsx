import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
import { MyContext } from '../context/Context';
const DetailPage = () => {

  const { movies } = useContext(MyContext);
  const params = useParams();
  const movieData = movies.filter((movie) => {
    return movie.id === params.id;
  });


  const { tvseries } = useContext(MyContext);
  const param = useParams();
  const tvData = tvseries.filter((tvserie) => {
    return tvserie.id === param.id;
  });

  return (
    <div className=' sm:flex sm:flex-row'>
      <div className="px-4 sm:px-8 h-auto lg:h-screen pb-[450px] 3xl:pb-48 md:pb-64">


        {/*Displaying Movie data */}
        {movieData.map((movie) => {
          return <div className='left p-5  text-xl sm:text-2xl lg:flex lg:flex-row'>

            <div className='  font-bold lg:w-5/12 flex flex-col  '>
              <img src={movie.primaryImage} alt="" className='w-10/12 item-center pt-10' /></div> <br />
            <div>
              <div>
                <p className='text-5xl lg:text-7xl'>{movie.primaryTitle}</p> <br />

                <div className="flex flex-row max-sm:flex-col max-sm:gap-4 max-sm:justify-start justify-between mt-5">
                  <div className="flex flex-col max-sm:flex-row max-sm:gap-4 gap-2 items-center">
                    <p className="text-[22px] max-sm:text-[18px] text-gray-500 font-semibold">
                      Length
                    </p>
                    <p className="text-[18px]">{movie.runtimeMinutes} min. </p>
                  </div>

                  <div className="flex flex-col max-sm:flex-row max-sm:gap-4  gap-2 items-center">
                    <p className="text-[22px] max-sm:text-[18px] text-gray-500 font-semibold">
                      Language
                    </p>
                    <p className="text-[18px]">{movie.spokenLanguages}</p>
                  </div>
                  <div className="flex flex-col max-sm:flex-row max-sm:gap-4  gap-2 items-center">
                    <p className="text-[22px] max-sm:text-[18px] text-gray-500 font-semibold">
                      Date
                    </p>
                    <p className="text-[18px]">{movie.releaseDate} </p>
                  </div>

                  <div className="flex flex-col max-sm:flex-row max-sm:gap-4  gap-2 items-center">
                    <p className="text-[22px] max-sm:text-[18px] text-gray-500 font-semibold  mb-4 sm:mb-0">
                      Rating
                    </p>
                    <p className="text-[18px]">
                      {Math.ceil(movie.averageRating)}/10{" "}
                    </p>
                  </div>
                </div>
                <br />
                <br />
                <h2 className="text-[22px] max-sm:text-[18px] text-gray-500 font-semibold">Synopsis</h2>
                {movie.description} <br />  <br />
                <h2 className="text-[22px] max-sm:text-[18px] text-gray-500 font-semibold">Interest</h2>
                {movie.interests}
              </div> <br /> <br />

              <div className="sm:flex sm:flex-row gap-4 justify-center">
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl m-2"><a target='blank' href={movie.externalLinks} className='flex flex-row gap-2'> Website <FaLink /> </a></button>
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl m-2"><a target='blank' href={movie.url}>IMDB</a></button>
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl m-2"><a target='blank' href={movie.trailer}>Trailer</a></button>
              </div>
            </div>

          </div>;
        })}

        {/*Displaying tvserie data */}
        {tvData.map((tvserie) => {
          return <div className='left p-5  text-xl sm:text-2xl lg:flex lg:flex-row'>

            <div className=' font-bold lg:w-5/12 flex flex-col '>
              <img src={tvserie.primaryImage} alt="" className='w-10/12 item-center pt-10' /></div> <br />
            <div>
              <div>
                <p className='text-5xl lg:text-7xl'>{tvserie.primaryTitle}</p>  <br />
                <div className="flex flex-row max-sm:flex-col max-sm:gap-4 max-sm:justify-start justify-between mt-5">

                  <div className="flex flex-col max-sm:flex-row max-sm:gap-4  gap-2 items-center">
                    <p className="text-[22px] max-sm:text-[18px] text-gray-500 font-semibold">
                      Language
                    </p>
                    <p className="text-[18px]">{tvserie.spokenLanguages}</p>
                  </div>
                  <div className="flex flex-col max-sm:flex-row max-sm:gap-4  gap-2 items-center">
                    <p className="text-[22px] max-sm:text-[18px] text-gray-500 font-semibold">
                      Date
                    </p>
                    <p className="text-[18px]">{tvserie.releaseDate} </p>
                  </div>

                  <div className="flex flex-col max-sm:flex-row max-sm:gap-4  gap-2 items-center">
                    <p className="text-[22px] max-sm:text-[18px] text-gray-500 mb-4 sm:mb-0 font-semibold">
                      Rating
                    </p>
                    <p className="text-[18px]">
                      {Math.ceil(tvserie.averageRating)}/10{" "}
                    </p>
                  </div>
                </div>
                <br /><br />
                <h2 className="text-[22px] max-sm:text-[18px] text-gray-500 font-semibold">Synopsis</h2>
                {tvserie.description} <br />  <br />
                <h2 className="text-[22px] max-sm:text-[18px] text-gray-500 font-semibold">Interest</h2>
                {tvserie.interests}
              </div> <br /> <br />

              <div className="sm:flex sm:flex-row gap-4 justify-center">
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl m-2"><a href={tvserie.externalLinks} className='flex flex-row gap-2'> Website <FaLink /> </a></button>
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl m-2"><a href={tvserie.url}>IMDB</a></button>
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl m-2"><a href={tvserie.trailer}>Trailer</a></button>
              </div>
            </div>
          </div>;
        })}

      </div>

    </div>
  );
};

export default DetailPage;