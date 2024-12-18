import { Link } from 'react-router-dom';
import Logo from '../icons/Logo';

const Title = () => {
  return (
    <>
    <div className='flex justify-between items-center'>
     <div className='flex  gap-3 p-6'>
      <Logo />
        <h1 className='text-3xl font-bold  mt-5 text-gray-800'>Study Adda</h1>

      </div>
      <button className='bg-gray-800 text-white px-6 py-4 rounded-md mr-7 whitespace-nowrap'>
        <Link to="/signup">Sign Up</Link>
        </button>
      </div>


    </>
  )
}

export default Title;
