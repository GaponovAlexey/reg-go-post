import Link from 'next/link'

const Header = ({ children }: any) => {
  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>
            <Link href={'/'}>Home</Link>
          </span>
          <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-between'>
            <div className='mr-4 hover:text-green-400 cursor-pointer'>
              <Link href={'auth/SignIn'}>Login</Link>
            </div>
            <div className=' hover:text-red-400 cursor-pointer'>Relog</div>
          </nav>
        </div>
      </header>

      {children}
    </>
  )
}

export default Header
