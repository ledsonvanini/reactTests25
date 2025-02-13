import logo from '../../public/logo-sesp.png'
import { Link } from 'react-router'

export default function Logo() {
  return (
    <div className='flex flex-col items-center p-4  '>
      <Link to='/'>
        <img className='rounded-full w-32' src={logo}/>
      </Link>
    </div>
  )
}
