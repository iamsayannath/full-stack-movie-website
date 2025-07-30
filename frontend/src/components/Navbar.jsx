import { MdMovie } from "react-icons/md";
import { FaHome } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { GiTv } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogo = () => {

    navigate("/");
  };
  const handleHome = () => {

    navigate("/");
  };
  const handleMovie = () => {
    navigate("/movies");
  };
  const handleSeries = () => {
    navigate("/tvSeries");
  };



  return (
    <div className='bg-slate-900 rounded-full flex flex-row sm:flex sm:flex-col items-center justify-center w-full sm:space-y-12 px-2 sm:px-0 py-2 sm:w-20 sm:py-8'>
      <div className='flex flex-row sm:flex sm:flex-col space-x-6 sm:space-x-0 sm:space-y-12 ml-4 sm:ml-0 sm:mt-4'>
        <div><MdMovie onClick={handleLogo} color='red' className='size-8 sm:size-12' /></div>

        <div className='flex flex-row sm:flex sm:flex-col space-x-3 sm:space-x-0 sm:space-y-6'>
          <FaHome className='size-6 sm:size-8' onClick={handleHome} />
          <MdLocalMovies className='size-6 sm:size-8' onClick={handleMovie} />
          < GiTv className='size-6 sm:size-8' onClick={handleSeries} />
        </div>
      </div>
    </div>
  );
};



export default Navbar;