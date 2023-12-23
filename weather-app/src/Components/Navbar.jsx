import logo from "/logo.png"

const Navbar = () => {
  return (
    <div className='relative w-full  bg-white h-20' >
      <div className='h-20 w-20'>
        <img 
        src={logo} 
        alt="Logo" 
        className='w-20 h-20' />
        </div>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'><h1 className='text-5xl text-zinc-900'>Pwnisht Weather Forecast</h1></div>
    </div>
  )
}

export default Navbar
