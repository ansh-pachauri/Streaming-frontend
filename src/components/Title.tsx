import { Link } from 'react-router-dom';
import Logo from '../icons/Logo';
import { Session } from './Session';


const Title = () => {
  return (
    <>
    <div>
    <div className='flex justify-between items-center'>
     <div className='flex  gap-3 p-4'>
      <Logo />
        <h1 className='text-3xl font-bold  mt-5 text-gray-800'>Study Adda</h1>

      </div>
      <button className='bg-gray-800 text-white px-6 py-4 rounded-md mr-7 whitespace-nowrap'>
        <Link to="/signup">Sign Up</Link>
        </button>
      </div>
      <div>
        <Session />
      </div>
    </div>
    


    </>
  )
}

export default Title;
