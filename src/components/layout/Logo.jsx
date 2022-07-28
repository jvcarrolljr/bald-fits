import logo from './assets/cropped-runner.png'

function Logo() {
  return (
    <div className='w-40'>
      <img src={logo} width={40} className='text-center mx-auto' alt='Bald Fits | Logo'/>
    </div>
  )
}

export default Logo