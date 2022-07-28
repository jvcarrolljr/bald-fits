import Logo from './Logo'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
      <nav className='navbar mb-6 bg-neutral text-neutral-content'>
        <div className='container mx-auto'>
          <div className='flex-none px-1 mx-1'>
            <Link to='/' className='text-lg font-bold align-middle'>
              <Logo />
            </Link>
          </div>
          <div className='flex-1 px-2 mx-2'>
            <div className='flex justify-end'>
              <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                Home
              </Link>
              <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                About
              </Link>
              <Link to='/looks' className='btn btn-ghost btn-sm rounded-btn'>
                Looks
              </Link>
              <Link to='/models' className='btn btn-ghost btn-sm rounded-btn'>
                Models
              </Link>
              <Link to='/guides' className='btn btn-ghost btn-sm rounded-btn'>
                Guides
              </Link>
              <Link to='/' className='btn btn-sm rounded-btn'>
                <div class="avatar">
                  <div class="w-8 rounded">
                    <img src="https://placeimg.com/192/192/people" alt="Tailwind-CSS-Avatar-component" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder'
 }

Navbar.propTypes = {
  title: PropTypes.string
}
export default Navbar